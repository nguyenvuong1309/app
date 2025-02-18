import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { ImagePlus, Loader2, Save, X } from "lucide-react";
import { useState, useEffect, ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/components/layout/HomeLayout/components/Navbar";
import axios from "axios";
import { ACCESS_TOKEN, USER } from "../../utils";
import { UserProfile } from "./UserProfile.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileSchema } from "./UserProfile.schema";
import { toast } from "react-toastify";
import PATH from "../../config/path";
import { HomeHeaderBar } from "../../layout/HomeHeaderBar";

export const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Khởi tạo form với React Hook Form và Zod
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UserProfile>({
    resolver: zodResolver(userProfileSchema),
  });

  const formData = watch();

  // Lấy dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(USER) || "{}");

    // Cập nhật các giá trị vào form
    Object.keys(userData).forEach((key) => {
      setValue(key as keyof UserProfile, userData[key]?.toString() || "");
    });
    setValue(
      "profile_pic",
      "https://1.bp.blogspot.com/-5XN9Dc454Zg/X-HhukE0jMI/AAAAAAABsZI/4SWgLzjXovgAf1D2jyRMSBssYEuBEOVyQCLcBGAsYHQ/s1600/your-diy-guide-to-pretty-kitchen.jpg"
    );
  }, [setValue]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Xử lý khi submit form
  const onSubmit = async (data: UserProfile) => {
    const body = {
      first_name: formData.username,
      last_name: formData.username,
      email: formData.email,
      address: formData.address,
      profile_pic:
        "https://1.bp.blogspot.com/-5XN9Dc454Zg/X-HhukE0jMI/AAAAAAABsZI/4SWgLzjXovgAf1D2jyRMSBssYEuBEOVyQCLcBGAsYHQ/s1600/your-diy-guide-to-pretty-kitchen.jpg",
      username: data.username,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/api/getForm/users/${data.id}/`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
          },
          withCredentials: true,
        }
      );
      localStorage.setItem(USER, JSON.stringify(data));
      toast.success("Profile updated successfully");
      navigate(PATH.PROFILE);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-screen">
      <div className="flex flex-1 flex-col">
        <HomeHeaderBar />
        <div className="h-20" />
        <div className="max-w-2xl mx-auto p-6">
          <Card>
            <CardHeader>
              <div className="h-20" />
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-semibold text-teal-700">
                  Edit Profile
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(-1)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                onError={(errors) => {
                  console.log("Form validation errors:", errors);
                }}
              >
                {/* Profile Picture */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src="https://github.com/shadcn.png"
                        alt="Profile avatar"
                      />
                    </div>
                    <Label
                      htmlFor="picture"
                      className="absolute bottom-0 right-0 p-2 bg-teal-600 rounded-full cursor-pointer hover:bg-teal-700 transition-colors"
                    >
                      <ImagePlus className="h-4 w-4 text-white" />
                    </Label>
                    <Input
                      id="picture"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                {/* Basic Information */}
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        {...register("username")}
                        id="username"
                        placeholder="Enter your username"
                      />
                      {errors.username && (
                        <p className="text-red-500">
                          {errors.username.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        {...register("address")}
                        id="address"
                        placeholder="Enter your address"
                      />
                      {errors.address && (
                        <p className="text-red-500">{errors.address.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        placeholder="Enter your role"
                        defaultValue={formData.type}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-2">
                  <Label>Languages</Label>
                  <div className="flex flex-wrap gap-2">
                    {["English", "Mandarin", "Spanish"].map((language) => (
                      <div key={language} className="flex items-center">
                        <Select defaultValue={language}>
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Mandarin">Mandarin</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                            <SelectItem value="German">German</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="text-gray-500"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="text-teal-600"
                    >
                      Add Language
                    </Button>
                  </div>
                </div>

                {/* About */}
                <div className="space-y-2">
                  <Label htmlFor="about">About</Label>
                  <Textarea
                    id="about"
                    placeholder="Tell us about yourself"
                    className="min-h-[150px]"
                    value={formData.addition_details}
                    {...register("addition_details")}
                    // defaultValue="My wife Yvonne and I have been hosting guests from all over the world since 2010. When you can bring joy to others in life, it's not 'work'. We thank YOU for giving purpose & meaning to what we do."
                  />
                  {errors.addition_details && (
                    <p className="text-red-500">
                      {errors.addition_details.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
