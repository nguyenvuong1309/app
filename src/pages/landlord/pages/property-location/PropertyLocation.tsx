import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Toggle } from "../../../../components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import { Search, HelpCircle, Plus, Minus } from "lucide-react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoBox,
  Polyline,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useState, useRef } from "react";
import { CreateOasisType } from "../create-new-oasis/schema";
import { useFormContext } from "react-hook-form";
// import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const libraries = ["places"];

const options = { closeBoxURL: "", enableEventPropagation: true };

interface PropertyLocationProps {
  next?: () => void;
  prev?: () => void;
}

export const PropertyLocation = ({ next, prev }: PropertyLocationProps) => {
  const {
    watch,
    setValue,
    formState: { errors },
    trigger,
    register,
  } = useFormContext<CreateOasisType>();
  const [coords, setCoords] = useState({
    lat: 10.8230989,
    lng: 106.6296638,
  });
  const [distance, setDistance] = useState(0);

  const inputRef = useRef<any>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any[],
  });

  const handleNext = async () => {
    const isValid = await trigger("location");
    if (isValid) {
      next?.();
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude, accuracy } = position.coords;
        setCoords({ lat: latitude, lng: longitude });
        setValue(
          "location.address",
          inputRef.current.getPlaces()[0].formatted_address
        );
        setDistance(accuracy);
      });
    }
  };

  const onPlacesChanged = () => {
    setCoords({
      lat: inputRef.current.getPlaces()[0].geometry.location.lat(),
      lng: inputRef.current.getPlaces()[0].geometry.location.lng(),
    });
    setValue(
      "location.address",
      inputRef.current.getPlaces()[0].formatted_address
    );
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Wil&apos;s listings</h1>
          <h2 className="text-xl mt-2">Add a new oasis</h2>
        </div>

        <div>
          <h3 className="text-lg mb-4">Where is your oasis located?</h3>

          <div className="flex gap-4 mb-4 w-full">
            <StandaloneSearchBox
              onLoad={(ref: any) => {
                inputRef.current = ref;
              }}
              onPlacesChanged={onPlacesChanged}
            >
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search by Address"
                  className="pr-10"
                  {...register("location.address")}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
                {errors.location?.address && (
                  <p className="text-red-500 text-sm">
                    {errors.location.address.message}
                  </p>
                )}
              </div>
            </StandaloneSearchBox>

            <div className="flex items-center gap-2">
              <span className="text-sm">Hide Address</span>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="relative border-2 border-[#2A9D8F] bg-white p-4 rounded-2xl max-w-[300px] shadow-lg before:absolute before:bottom-[-12px] before:left-4 before:w-4 before:h-4 before:rotate-45 before:border-b-2 before:border-r-2 before:border-[#2A9D8F] before:bg-white">
                    <p className="text-sm text-black">
                      For privacy reasons, your address can be shown in a
                      proximity area. The exact address will be shared with your
                      tenants when a lease is made.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Toggle aria-label="Toggle address visibility">Yes/No</Toggle>
            </div>
          </div>

          <div className="relative w-full h-[300px] border rounded-lg overflow-hidden">
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              center={coords}
              zoom={10}
            >
              <Marker position={coords} />
              {/* <InfoBox options={options}>
                <>
                  <div
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "1em",
                      padding: "0.2em",
                    }}
                  >
                    someone's house
                  </div>
                </>
              </InfoBox> */}
              {/* <Polyline path={positions} options={optionsPolyline} /> */}
            </GoogleMap>
            {/* <div className="absolute right-2 top-2 flex flex-col gap-2">
              <Button size="icon" variant="secondary">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary">
                <Minus className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
          <div className="flex justify-end gap-4 mt-10">
            <button
              type="button"
              onClick={prev}
              className="px-6 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
