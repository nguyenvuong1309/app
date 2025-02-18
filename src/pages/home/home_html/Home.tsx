import React, { useState, useEffect, useRef, FormEvent } from "react";
import "./css/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImage from "./images/logo.svg";
import bg_item1 from "./images/bg_item_1.svg";
import img_yes from "./images/img_yes.png";
import img_trusted from "./images/img_trusted.png";
import img_professional from "./images/img_professional.png";
import img_cheap from "./images/img_cheap.png";
import GardenSuiteKitchen5 from "./images/GardenSuiteKitchen5.jpeg";
import GardenSuiteKitchen4 from "./images/GardenSuiteKitchen4.jpeg";
import GardenSuiteKitchen6 from "./images/GardenSuiteKitchen6.jpeg";
import GardenSuiteKitchen1 from "./images/GardenSuiteKitchen1.jpeg";
import GardenSuiteLivingroom3 from "./images/GardenSuiteLivingroom3.jpeg";
import img_about from "./images/img_about.jpg";
import FAQs from "./images/FAQs.jpg";
import rent from "./images/rent.png";
import insurance101 from "./images/insurance101.png";
import logo_ft from "./images/logo_ft.png";
import img_fb from "./images/img_fb.png";
import img_ig from "./images/img_ig.png";
import img_ytb from "./images/img_ytb.png";
import img_tw from "./images/img_tw.png";
import bg_item3 from "./images/bg_item_3.svg";
import bg_item2 from "./images/bg_item_2.svg";
import PATH from "../../../config/path";
import { REFRESH_TOKEN } from "../../../utils";
import { ACCESS_TOKEN } from "../../../utils";
import { useAuth0 } from "@auth0/auth0-react";
import { logout } from "../../../components/Auth/services/Auth.services";

export const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem("localUserData");
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
    navigate(PATH.LOGIN);
  };
  return (
    <div className="flex justify-center w-full">
      <style>
        {`
          html {
            height: 100%;
          }

          html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            vertical-align: baseline;
          }

          html {
            -webkit-text-size-adjust: none;
          }

          *, *:before, *:after {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -o-box-sizing: border-box;
          }

          img {
            max-width: 100%;
            height: auto;
            width: auto;
          }

          a, a:link, a:visited {
            color: #2F7682;
            text-decoration: none;
          }
          a:hover, a:link:hover, a:visited:hover {
            color: #000;
            text-decoration: none;
          }

          a:not([href]):not([tabindex]) {
            color: inherit;
            text-decoration: none;
          }

          canvas {
            cursor: pointer;
          }

          ul, ol {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          strong {
            font-weight: 600;
          }

          article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
            display: block;
          }

          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after, q:before, q:after {
            content: "";
            content: none;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          input, textarea {
            width: 100%;
            outline: none;
            border: 1px solid #cccccc;
            border-radius: 3px;
            vertical-align: baseline;
            background-color: transparent;
            box-shadow: none;
            padding: 5px;
          }
          input.error, textarea.error {
            border-color: #FD615A !important;
          }

          hr {
            width: 100%;
            margin: 10px auto;
            height: 1px;
            background-color: #d2d2d2;
          }

          sup {
            line-height: 0;
            font-size: 8pt;
          }

          dl, dd, dt {
            font-weight: normal;
            line-height: 1.5;
          }

          h1, h2, h3, h4, h5 {
            margin: 0;
            padding: 0;
            font-weight: normal;
          }

          h1 {
            font-size: 24px;
            line-height: 1.5;
          }

          h2 {
            font-size: 22px;
            line-height: 1.5;
          }

          h3 {
            font-size: 20px;
            line-height: 1.5;
          }

          h4 {
            font-size: 18px;
            line-height: 1.5;
          }

          h5 {
            font-size: 16px;
            line-height: 1.5;
          }

          .color-white {
            color: #FFF;
          }

          .highlight {
            color: #2F7682;
          }

          .no-data {
            text-align: center;
            padding: 10px;
          }

          .clear {
            clear: both !important;
          }

          .hide {
            display: none !important;
          }

          .text-align-center {
            text-align: center;
          }

          .text-align-left {
            text-align: left;
          }

          .text-align-right {
            text-align: right;
          }

          /*------------------------------------------------
          ** HEADER
          **------------------------------------------------*/
          .menunav {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .menunav li a {
            display: block;
            white-space: nowrap;
            color: #1F1F1F;
            font-size: 18px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
            text-transform: capitalize;
            padding: 8px 8px 4px;
            border-bottom: 4px solid transparent;
          }
          .menunav li a:hover {
            color: #2F7682;
          }
          .menunav li.active a {
            color: #2F7682;
            border-color: #55C8BD;
          }

          header {
            z-index: 2;
            background: #fff;
            border-bottom: 1px solid #e9e9e9;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
          }
          header .header-frame {
            position: relative;
            height: 100%;
            padding: 4px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          header .header-frame__logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          header .header-frame__logo img {
            display: block;
            width: 60px;
            aspect-ratio: 1/1;
            object-fit: contain;
          }
          header .header-frame__logo h1 {
            color: #2F7682;
            font-size: 32px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
          }
          header .header-frame__logo h1 .highlight {
            color: #55C8BD;
          }
          header .header-frame__menu {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          header .header-frame__menu--action {
            width: 44px;
            height: 44px;
            border-radius: 100%;
            overflow: hidden;
          }
          header .header-frame__menu--action .toggle-dropdown__menu {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            color: #4C4C4C;
          }
          header .header-frame__menu--action .popup-dropdown__menu {
            opacity: 0;
            visibility: hidden;
            transform: translateY(50%);
            z-index: 10000;
            position: absolute;
            right: 0;
            top: calc(100% + 5px);
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          header .header-frame__menu--action .popup-dropdown__menu--frame {
            background: #fff;
            border-radius: 8px;
            box-shadow: 2px 4px 8px 0px rgba(52, 61, 55, 0.12);
            overflow: hidden;
          }
          header .header-frame__menu--action .popup-dropdown__menu--frame .menu-dropdown__item--link {
            display: block;
            padding: 12px 20px;
            color: #1F1F1F;
          }
          header .header-frame__menu--action .popup-dropdown__menu--frame .menu-dropdown__item--link:hover {
            color: #2F7682;
            background: #eefaf8;
          }
          header .header-frame__menu--action .popup-dropdown__menu--frame .menu-contact {
            border-radius: 0;
          }
          header .header-frame__menu--action:hover .toggle-dropdown__menu, header .header-frame__menu--action.active .toggle-dropdown__menu {
            background: #eaf1f3;
          }
          header .header-frame__menu--action.active .popup-dropdown__menu {
            opacity: 1;
            visibility: initial;
            transform: translateY(0);
          }
          header .header .row {
            height: 100%;
          }
          header .header .row .col {
            height: 100%;
          }
          header .header-mobile {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            background: #fff;
            z-index: 1009;
          }
          header .header-mobile__logo {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          header .header-mobile__logo--title {
            font-weight: 600;
          }
          header .header-mobile__logo--link {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 32px;
            font-weight: 500;
            padding-left: 10px;
          }
          header .header-mobile__logo--link:hover {
            color: #2F7682;
          }
          header .header-mobile__logo--link .highlight {
            color: #55C8BD;
          }
          header .header-mobile__logo--img img {
            display: block;
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: contain;
          }
          header .header-mobile__toggle {
            width: 59px;
            height: 59px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          header .header-mobile__toggle svg {
            color: #4c4c4c;
          }

          .rd-panel {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            border-bottom: 1px solid #eaecf0;
          }
          .rd-panel .toggle {
            background: none;
            border: none;
            display: inline-block;
            padding: 0;
            outline: none;
            outline-offset: 0;
            cursor: pointer;
            -webkit-appearance: none;
          }
          .rd-panel .toggle span {
            cursor: pointer;
            width: 24px;
            height: 4px;
            background-color: #2F7682;
            backface-visibility: hidden;
            border-radius: 2px;
            position: relative;
            display: block;
            margin: auto;
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .rd-panel .toggle span:before, .rd-panel .toggle span:after {
            content: "";
            position: absolute;
            left: 0;
            top: -8px;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            width: 24px;
            height: 4px;
            background-color: #2F7682;
            backface-visibility: hidden;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            -moz-transform-origin: 1.71429px center;
            -ms-transform-origin: 1.71429px center;
            -o-transform-origin: 1.71429px center;
            -webkit-transform-origin: 1.71429px center;
            transform-origin: 1.71429px center;
            -moz-transform-origin: 1.71429px center;
            -ms-transform-origin: 1.71429px center;
            -o-transform-origin: 1.71429px center;
            -webkit-transform-origin: 1.71429px center;
            transform-origin: 1.71429px center;
          }
          .rd-panel .toggle span:after {
            top: 8px;
          }
          .rd-panel .toggle.active svg {
            color: #55C8BD;
          }
          .rd-panel .logo {
            height: 100%;
            padding: 5px;
          }
          .rd-panel .logo img {
            height: 100%;
            max-width: initial;
          }
          .rd-panel .plugin-search {
            width: 100%;
            max-width: 100%;
            padding-right: 10px;
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
          }
          .rd-panel .plugin-search .form_search {
            width: 100%;
            max-width: 920px;
          }
          .rd-panel .plugin-search .form_search .search_label {
            border: 1px solid #b38951;
            height: 38px;
          }
          .rd-panel .plugin-cart {
            width: 80px;
            height: 37px;
            margin-right: 2px;
          }
          .rd-panel .plugin-cart .fa {
            width: 37px;
            height: 37px;
            right: 10px;
          }

          .rd-menu {
            display: none;
            background: #2F7682;
            padding: 20px 0;
            box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
          }
          .rd-menu__item a {
            display: block;
            padding: 15px 20px;
            color: #fff;
            font-weight: 600;
          }
          .rd-menu__item a:hover, .rd-menu__item a:focus {
            color: #fff;
          }
          .rd-menu__item.active a {
            background: #55C8BD;
            color: #fff;
          }
          .rd-menu__nav--contact {
            padding: 20px;
            background: #55C8BD;
          }
          .rd-menu__nav--contact a {
            color: #fff;
          }

          /*------------------------------------------------
          ** Components
          **------------------------------------------------*/
          /*------------------------------------------------
          ** General
          **------------------------------------------------*/
          .page {
            position: relative;
          }
          .page-bg {
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
          }
          .page-bg img {
            width: 100%;
          }
          .page-heading {
            margin-bottom: 20px;
          }

          body {
            min-height: 100%;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            background: #fff;
            position: relative;
            color: #1F1F1F;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
          }

          .main-body {
            padding-top: 109px;
            min-height: 100vh;
          }

          .box {
            position: relative;
          }

          .section {
            padding: 28px 0;
          }
          .section-frame {
            margin-top: 20px;
            padding: 32px;
            border-radius: 12px;
            background: #eefaf8;
          }

          .box-header {
            margin-bottom: 40px;
          }

          .box-heading {
            font-size: 40px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
            text-transform: uppercase;
          }

          .box-title {
            font-size: 32px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
          }
          .box-title__sidebar {
            font-size: 26px;
            line-height: 1.2;
            font-weight: 700;
            color: #2F7682;
            font-family: "Barlow Condensed", sans-serif;
          }
          .box-title__sidebar i {
            margin-right: 16px;
          }

          .box-label {
            font-size: 20px;
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 700;
            margin-bottom: 20px;
          }
          .box-label.small {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .box-desc {
            color: #797979;
            font-weight: 400;
            margin-top: 4px;
          }

          .box-flex {
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: space-between;
          }
          .box-flex__action {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .clearVal {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            width: 24px;
            height: 24px;
            padding: 0;
            background: transparent;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .clearVal:focus {
            outline: none;
          }

          .form {
            display: flex;
            flex-wrap: wrap;
            gap: 20px 0;
          }
          .form-group {
            width: 100%;
            margin-bottom: 0px;
          }
          .form-group__content {
            position: relative;
          }
          .form-group__content.typing .clearVal {
            opacity: 1;
            visibility: initial;
          }
          .form-group__radio {
            display: flex;
            align-items: center;
            gap: 40px;
            height: 58px;
          }
          .form-flex {
            width: 100%;
            display: flex;
            gap: 20px;
          }
          .form-flex .form-group {
            width: calc(50% - 10px);
          }

          .file {
            position: relative;
            max-width: 360px;
            background: #eefaf8;
            border: 1px dashed #88d9d1;
            border-radius: 8px;
          }
          .file.error {
            border-color: #FD615A;
          }
          .file-frame {
            padding: 20px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }
          .file-frame.active {
            padding: 20px 60px 20px 10px;
          }
          .file-icon {
            width: 56px;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .file-icon i {
            font-size: 40px;
            color: #55C8BD;
          }
          .file-content {
            text-align: center;
          }
          .file-content__title {
            color: #2F7682;
            font-size: 18px;
            font-weight: 700;
          }
          .file-content__desc {
            color: #6d9fa8;
          }
          .file-name {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .file-remove {
            display: none;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 20px;
            width: 30px;
            height: 30px;
            border: none;
            border-radius: 100%;
            padding: 0;
            background: transparent;
          }
          .file-remove i {
            font-size: 20px;
          }
          .file-remove:focus {
            outline: none;
          }
          .file-remove:hover {
            background: #eaf1f3;
          }
          .file-remove.active {
            display: flex;
          }
          .file input[type=file] {
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
          .file input[type=file]::file-selector-button {
            cursor: pointer;
          }

          input,
          textarea {
            border-radius: 4px;
            padding: 16px 44px 16px 20px;
            border: 1px solid #4c4c4c;
            background: #fff;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          input::placeholder,
          textarea::placeholder {
            color: #a5a5a5;
          }
          input:hover, input:focus,
          textarea:hover,
          textarea:focus {
            border-color: #2F7682;
          }

          .button {
            width: fit-content;
            display: flex;
            color: #fff;
            font-weight: 500;
          }
          .button-label {
            width: 100%;
            white-space: nowrap;
            padding: 12px 16px;
            background: #2F7682;
            color: #fff;
            text-align: center;
          }
          .button-icon {
            color: #fff;
            background: #2F7682;
            min-width: 48px;
            padding: 12px;
          }
          .button-icon i {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button:hover {
            box-shadow: 3px 6px 16px 0px rgba(52, 61, 55, 0.16);
          }
          .button:hover .button-label,
          .button:hover .button-icon {
            background: #55C8BD;
          }
          .button.button-secondary {
            background-color: transparent;
          }
          .button.button-secondary .button-label,
          .button.button-secondary .button-icon {
            background: transparent;
            border: 2px solid #2F7682;
            color: #2F7682;
            padding: 10px 14px;
          }
          .button.button-secondary:hover .button-icon,
          .button.button-secondary:hover .button-label {
            border-color: #55C8BD;
            color: #55C8BD;
          }
          .button.button-cta .button-label,
          .button.button-cta .button-icon {
            background: #FD615A;
          }
          .button.button-cta:hover .button-label,
          .button.button-cta:hover .button-icon {
            background: #fe908c;
          }
          .button.button-white .button-icon,
          .button.button-white .button-label {
            background: #fff;
            color: #2F7682;
          }
          .button.button-white:hover .button-label,
          .button.button-white:hover .button-icon {
            background: #55C8BD;
            color: #fff;
          }
          .button.button-flex {
            gap: 1px;
          }
          .button.button-small .button-label {
            line-height: 1;
          }
          .button.button-small .button-icon {
            min-width: 40px;
            padding: 8px;
          }
          .button.button-big .button-label,
          .button.button-big .button-icon {
            padding: 20px;
          }
          .button.button-big .button-label {
            font-size: 20px;
            line-height: 1;
          }
          .button.button-big .button-icon {
            width: 64px;
          }
          .button.button-big.button-secondary .button-label,
          .button.button-big.button-secondary .button-icon {
            padding: 18px;
          }

          .button-filter {
            display: none;
            width: 40px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #b0b0b0;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .button-filter i {
            font-size: 16px;
            color: #4c4c4c;
          }
          .button-filter.active {
            background-color: #2F7682;
          }
          .button-filter.active i {
            color: #fff;
          }
          .button-filter.active svg path {
            fill: #fff;
          }

          a.show-more,
          .show-more {
            color: #2F7682;
          }
          a.show-more:hover,
          .show-more:hover {
            color: #2F7682;
            text-decoration: underline;
          }

          .text-center {
            text-align: center;
          }

          .gap-y-20 {
            gap: 20px 0;
          }

          .gap-y-40 {
            gap: 40px 0;
          }

          .dots {
            width: 4px;
            height: 4px;
            border-radius: 100%;
          }

          .noti-format {
            display: none;
            font-size: 12px;
            font-family: "Poppins", sans-serif;
            color: #FD615A;
            font-weight: 400;
          }
          .noti-format.active {
            display: inline-block;
          }
          .noti-required {
            color: #FD615A;
          }

          #loading {
            display: none;
            position: absolute;
            z-index: 9;
            inset: 0;
          }

          .loading-frame {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .none {
            display: none;
          }

          .close-sidebar {
            cursor: pointer;
            display: none;
            width: 34px;
            height: 34px;
            border: 1px solid #b0b0b0;
            margin-left: auto;
            border-radius: 4px;
          }
          .close-sidebar i {
            color: #4c4c4c;
            font-size: 18px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .box-count {
            margin-top: 12px;
          }
          .box-count strong {
            font-size: 20px;
          }

          .more {
            margin-top: 40px;
          }
          .more a {
            margin: 0 auto;
          }

          /*------------------------------------------------
          ** MORE
          **------------------------------------------------*/
          .scroll-to-top {
            position: fixed;
            bottom: 91px;
            right: 33px;
            width: 40px;
            height: 40px;
            display: none;
            align-items: center;
            justify-content: center;
            color: #414c5b;
            font-size: 16px;
            text-transform: uppercase;
            text-align: center;
            z-index: 100;
            cursor: pointer;
            background: #ffffff;
            display: none;
            border-radius: 50px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
            -webkit-transition: all 300ms ease;
            -ms-transition: all 300ms ease;
            -o-transition: all 300ms ease;
            -moz-transition: all 300ms ease;
            transition: all 300ms ease;
          }
          .scroll-to-top.active {
            display: flex;
          }

          .scroll-to-top:hover {
            color: #ffffff;
            background: #414c5b;
          }

          .icon_zalo {
            width: 40px;
            height: 40px;
            text-align: center;
            display: block;
            position: fixed;
            bottom: 60px;
            left: 8pt;
            z-index: 99;
            padding: 10px 0;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 3pt 12pt;
            background: #008fe5;
          }
          .icon_zalo a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
          .icon_zalo a img {
            height: 30px;
          }

          .contact-fixed {
            position: fixed;
            left: 4px;
            bottom: 10px;
            z-index: 999;
            z-index: 999;
            width: fit-content;
          }
          .contact-fixed .inner {
            display: flex;
            flex-direction: column;
            float: left;
            align-items: center;
            justify-content: center;
          }
          .contact-fixed .inner .phone {
            position: relative;
            border-radius: 3px;
            font-weight: 600;
            line-height: 0;
            padding: 0px 8px;
          }
          .contact-fixed .inner .phone .fa {
            animation: 1s ease-in-out 0s normal none infinite running ring;
            color: #fff;
            background: #ed1c24;
            border-radius: 50%;
            font-size: 20px;
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .contact-fixed .inner .phone .ring {
            animation: 1.2s ease-in-out 0s normal none infinite running ring-circle;
            background-color: #ed1c24;
            border-radius: 100%;
            height: 50px;
            left: 0px;
            opacity: 0.1;
            position: absolute;
            top: -8px;
            transform-origin: 50% 50% 0;
            transition: all 0.5s ease 0s;
            width: 50px;
          }
          .contact-fixed .inner .button {
            padding: 15px 20px;
            border: 1px solid #fff;
            background: #bf0000;
            color: #fff;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type=number] {
            -moz-appearance: textfield;
          }

          input[type=date]::-webkit-inner-spin-button,
          input[type=date]::-webkit-calendar-picker-indicator {
            display: none;
            -webkit-appearance: none;
          }

          .slick-slider {
            margin: 0;
            height: 100%;
          }
          .slick-slider .slick-track {
            display: flex;
          }
          .slick-slider .slick-list {
            height: 100%;
          }
          .slick-slider .slick-list .slick-track {
            height: 100%;
          }
          .slick-slider > button {
            z-index: 1;
            position: absolute;
            width: 44px;
            height: 44px;
            margin: 0;
            padding: 0;
            background-color: #2F7682;
            top: calc(50% - 15px);
            border-radius: 100%;
            border: none;
            outline: none;
            text-indent: 200%;
            overflow: hidden;
          }
          .slick-slider > button:before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-indent: 0;
            color: #fff;
            font-family: "FontAwesome" !important;
            display: inline-block !important;
            font-size: 26px;
            line-height: 1.1 !important;
            opacity: 1;
          }
          .slick-slider > button.slick-prev {
            left: auto;
            right: calc(100% + 10px);
          }
          .slick-slider > button.slick-prev:before {
            content: "\f060";
          }
          .slick-slider > button.slick-next {
            left: calc(100% + 10px);
            right: auto;
          }
          .slick-slider > button.slick-next:before {
            content: "\f061";
          }
          .slick-slider > button:hover, .slick-slider > button:focus {
            background: #55C8BD;
          }
          .slick-slider .slick-dots {
            bottom: 0;
            width: 100%;
            height: fit-content;
            text-align: center;
          }
          .slick-slider .slick-dots li {
            width: fit-content;
            height: fit-content;
          }
          .slick-slider .slick-dots li button {
            width: 16px;
            height: 16px;
            background: #eaf1f3;
            opacity: 1;
            border-radius: 100%;
          }
          .slick-slider .slick-dots li button::before {
            content: none;
            width: 16px;
            height: 16px;
            background: #eaf1f3;
            opacity: 1;
            border-radius: 100%;
          }
          .slick-slider .slick-dots li.slick-active button {
            background: #2F7682;
          }
          .slick-slider .slick-prev {
            left: 0;
          }
          .slick-slider .slick-next {
            right: 0;
          }

          .ui-datepicker {
            width: 100%;
          }
          .ui-datepicker table {
            margin-bottom: 0;
          }
          .ui-datepicker th {
            padding: 8px 6px;
          }
          .ui-datepicker th span {
            line-height: 1;
            font-size: 12px;
            color: #1F1F1F;
            text-transform: uppercase;
          }
          .ui-datepicker td {
            padding: 4px 0;
          }
          .ui-datepicker td.ui-datepicker-today a {
            background: #eefaf8;
            color: #FD615A;
          }
          .ui-datepicker td .ui-state-default {
            border-radius: 100px;
            background: transparent;
            border: none;
            color: #1F1F1F;
            font-weight: 500;
            text-align: center;
            padding: 10px;
            font-size: 18px;
          }
          .ui-datepicker td .ui-state-default.ui-state-hover {
            color: #2F7682;
            background: #eefaf8;
          }
          .ui-datepicker td .ui-state-default.ui-state-active {
            background: #2F7682;
            color: #fff;
          }
          .ui-datepicker .ui-datepicker-prev,
          .ui-datepicker .ui-datepicker-next {
            top: 50%;
            width: 24px;
            height: 24px;
            border: none;
            cursor: pointer;
            transform: translateY(-50%);
          }
          .ui-datepicker .ui-datepicker-prev {
            left: 0;
          }
          .ui-datepicker .ui-datepicker-next {
            right: 0;
          }
          .ui-datepicker .ui-corner-all.ui-datepicker-prev::before {
            content: "\f053";
            position: absolute;
            font-family: "FontAwesome" !important;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .ui-datepicker .ui-corner-all.ui-datepicker-next::before {
            content: "\f054";
            position: absolute;
            font-family: "FontAwesome" !important;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .ui-datepicker .ui-corner-all .ui-icon {
            display: none;
          }

          .ui-widget.ui-widget-content {
            border: none;
            padding: 0 32px 40px;
          }

          .ui-widget-header {
            background: transparent;
            border: none;
            border-bottom: 1px solid #abaaaa;
          }

          .ui-datepicker .ui-datepicker-header {
            padding: 16px 0;
            margin-bottom: 16px;
            border-radius: 0;
          }

          .filepond--root {
            margin-bottom: 0;
          }

          .filepond--credits {
            display: none;
          }

          .dz-main {
            position: relative;
            min-height: 150px;
            border: 1px solid #4c4c4c;
            border-radius: 4px;
          }
          .dz-main.error {
            border-color: #FD615A;
          }

          .select2 {
            width: 100% !important;
          }
          .select2-dropdown {
            z-index: 1;
          }

          .select2-container .select2-selection--single {
            height: 58px;
            display: flex;
            border: 1px solid #4c4c4c;
            padding: 16px 20px;
            background: #fff;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .select2-container .select2-selection--single:hover, .select2-container .select2-selection--single:focus {
            border-color: #2F7682;
          }
          .select2-container .select2-selection--single.error {
            border-color: #ff0000 !important;
          }

          .select2-container--default .select2-selection--single .select2-selection__rendered {
            color: #1F1F1F;
            white-space: initial;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

          .select2-container--default .select2-selection--single .select2-selection__placeholder {
            color: #a5a5a5;
            font-weight: 400;
          }

          .select2-container--default .select2-selection--single .select2-selection__arrow {
            width: 24px;
            height: 24px;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }

          .select2-results__options li > ul {
            background: #eee;
          }

          .select2-container--default .select2-results__option .select2-results__option {
            padding: 6px;
            padding-left: 32px;
            font-weight: 400;
          }

          .select2-results__option[aria-selected] {
            font-weight: 600;
            padding: 12px;
          }

          .select2-container--default .select2-results__group {
            padding: 0;
          }

          .select2-container--default .select2-results__option[aria-selected=true] {
            background-color: #2F7682;
            color: #fff;
          }

          @-webkit-keyframes passing-through {
            0% {
              opacity: 0;
              -webkit-transform: translateY(40px);
              -moz-transform: translateY(40px);
              -ms-transform: translateY(40px);
              -o-transform: translateY(40px);
              transform: translateY(40px);
            }
            30%, 70% {
              opacity: 1;
              -webkit-transform: translateY(0px);
              -moz-transform: translateY(0px);
              -ms-transform: translateY(0px);
              -o-transform: translateY(0px);
              transform: translateY(0px);
            }
            100% {
              opacity: 0;
              -webkit-transform: translateY(-40px);
              -moz-transform: translateY(-40px);
              -ms-transform: translateY(-40px);
              -o-transform: translateY(-40px);
              transform: translateY(-40px);
            }
          }
          @-moz-keyframes passing-through {
            0% {
              opacity: 0;
              -webkit-transform: translateY(40px);
              -moz-transform: translateY(40px);
              -ms-transform: translateY(40px);
              -o-transform: translateY(40px);
              transform: translateY(40px);
            }
            30%, 70% {
              opacity: 1;
              -webkit-transform: translateY(0px);
              -moz-transform: translateY(0px);
              -ms-transform: translateY(0px);
              -o-transform: translateY(0px);
              transform: translateY(0px);
            }
            100% {
              opacity: 0;
              -webkit-transform: translateY(-40px);
              -moz-transform: translateY(-40px);
              -ms-transform: translateY(-40px);
              -o-transform: translateY(-40px);
              transform: translateY(-40px);
            }
          }
          @keyframes passing-through {
            0% {
              opacity: 0;
              -webkit-transform: translateY(40px);
              -moz-transform: translateY(40px);
              -ms-transform: translateY(40px);
              -o-transform: translateY(40px);
              transform: translateY(40px);
            }
            30%, 70% {
              opacity: 1;
              -webkit-transform: translateY(0px);
              -moz-transform: translateY(0px);
              -ms-transform: translateY(0px);
              -o-transform: translateY(0px);
              transform: translateY(0px);
            }
            100% {
              opacity: 0;
              -webkit-transform: translateY(-40px);
              -moz-transform: translateY(-40px);
              -ms-transform: translateY(-40px);
              -o-transform: translateY(-40px);
              transform: translateY(-40px);
            }
          }
          @-webkit-keyframes slide-in {
            0% {
              opacity: 0;
              -webkit-transform: translateY(40px);
              -moz-transform: translateY(40px);
              -ms-transform: translateY(40px);
              -o-transform: translateY(40px);
              transform: translateY(40px);
            }
            30% {
              opacity: 1;
              -webkit-transform: translateY(0px);
              -moz-transform: translateY(0px);
              -ms-transform: translateY(0px);
              -o-transform: translateY(0px);
              transform: translateY(0px);
            }
          }
          @-moz-keyframes slide-in {
            0% {
              opacity: 0;
              -webkit-transform: translateY(40px);
              -moz-transform: translateY(40px);
              -ms-transform: translateY(40px);
              -o-transform: translateY(40px);
              transform: translateY(40px);
            }
            30% {
              opacity: 1;
              -webkit-transform: translateY(0px);
              -moz-transform: translateY(0px);
              -ms-transform: translateY(0px);
              -o-transform: translateY(0px);
              transform: translateY(0px);
            }
          }
          @keyframes slide-in {
            0% {
              opacity: 0;
              -webkit-transform: translateY(40px);
              -moz-transform: translateY(40px);
              -ms-transform: translateY(40px);
              -o-transform: translateY(40px);
              transform: translateY(40px);
            }
            30% {
              opacity: 1;
              -webkit-transform: translateY(0px);
              -moz-transform: translateY(0px);
              -ms-transform: translateY(0px);
              -o-transform: translateY(0px);
              transform: translateY(0px);
            }
          }
          @-webkit-keyframes pulse {
            0% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
            10% {
              -webkit-transform: scale(1.1);
              -moz-transform: scale(1.1);
              -ms-transform: scale(1.1);
              -o-transform: scale(1.1);
              transform: scale(1.1);
            }
            20% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
          }
          @-moz-keyframes pulse {
            0% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
            10% {
              -webkit-transform: scale(1.1);
              -moz-transform: scale(1.1);
              -ms-transform: scale(1.1);
              -o-transform: scale(1.1);
              transform: scale(1.1);
            }
            20% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
          }
          @keyframes pulse {
            0% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
            10% {
              -webkit-transform: scale(1.1);
              -moz-transform: scale(1.1);
              -ms-transform: scale(1.1);
              -o-transform: scale(1.1);
              transform: scale(1.1);
            }
            20% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
          }
          .dz-clickable {
            cursor: pointer;
          }

          .dz-clickable * {
            cursor: default;
          }

          .dz-clickable .dz-message,
          .dz-clickable .dz-message * {
            cursor: pointer;
          }

          .dz-started .dz-message {
            display: none;
          }

          .dz-drag-hover {
            border-style: solid;
          }

          .dz-drag-hover .dz-message {
            opacity: 0.5;
          }

          .dz-message {
            text-align: center;
            margin: 2em 0;
          }

          .dz-message .dz-button {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
          }

          .dz-preview {
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin: 16px;
            min-height: 100px;
          }

          .dz-preview:hover {
            z-index: 1000;
          }

          .dz-preview:hover .dz-details {
            opacity: 1;
          }

          .dz-preview.dz-file-preview .dz-image {
            border-radius: 20px;
            background: #999;
            background: linear-gradient(to bottom, #eee, #ddd);
          }

          .dz-preview.dz-file-preview .dz-details {
            opacity: 1;
          }

          .dz-preview.dz-image-preview {
            background: #fff;
          }

          .dz-preview.dz-image-preview .dz-details {
            -webkit-transition: opacity 0.2s linear;
            -moz-transition: opacity 0.2s linear;
            -ms-transition: opacity 0.2s linear;
            -o-transition: opacity 0.2s linear;
            transition: opacity 0.2s linear;
          }

          .dz-preview .dz-remove {
            font-size: 14px;
            text-align: center;
            display: block;
            cursor: pointer;
            border: none;
          }

          .dz-preview .dz-remove:hover {
            text-decoration: underline;
          }

          .dz-preview:hover .dz-details {
            opacity: 1;
          }

          .dz-preview .dz-details {
            z-index: 20;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            font-size: 13px;
            min-width: 100%;
            max-width: 100%;
            padding: 2em 1em;
            text-align: center;
            color: rgba(0, 0, 0, 0.9);
            line-height: 150%;
          }

          .dz-preview .dz-details .dz-size {
            margin-bottom: 1em;
            font-size: 16px;
          }

          .dz-preview .dz-details .dz-filename {
            white-space: nowrap;
          }

          .dz-preview .dz-details .dz-filename:hover span {
            border: 1px solid rgba(200, 200, 200, 0.8);
            background-color: rgba(255, 255, 255, 0.8);
          }

          .dz-preview .dz-details .dz-filename:not(:hover) {
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .dz-preview .dz-details .dz-filename:not(:hover) span {
            border: 1px solid transparent;
          }

          .dz-preview .dz-details .dz-filename span,
          .dz-preview .dz-details .dz-size span {
            background-color: rgba(255, 255, 255, 0.4);
            padding: 0 0.4em;
            border-radius: 3px;
          }

          .dz-preview:hover .dz-image img {
            -webkit-transform: scale(1.05, 1.05);
            -moz-transform: scale(1.05, 1.05);
            -ms-transform: scale(1.05, 1.05);
            -o-transform: scale(1.05, 1.05);
            transform: scale(1.05, 1.05);
            -webkit-filter: blur(8px);
            filter: blur(8px);
          }

          .dz-preview .dz-image {
            border-radius: 20px;
            overflow: hidden;
            width: 100px;
            height: 100px;
            position: relative;
            display: block;
            z-index: 10;
          }

          .dz-preview .dz-image img {
            display: block;
          }

          .dz-preview.dz-success .dz-success-mark {
            -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
            -moz-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
            -ms-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
            -o-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
            animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .dz-preview.dz-error .dz-error-mark {
            opacity: 1;
            -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
            -moz-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
            -ms-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
            -o-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
            animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .dz-preview .dz-success-mark,
          .dz-preview .dz-error-mark {
            pointer-events: none;
            opacity: 0;
            z-index: 500;
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            margin-left: -27px;
            margin-top: -27px;
          }

          .dz-preview .dz-success-mark svg,
          .dz-preview .dz-error-mark svg {
            display: block;
            width: 54px;
            height: 54px;
          }

          .dz-preview.dz-processing .dz-progress {
            opacity: 1;
            -webkit-transition: all 0.2s linear;
            -moz-transition: all 0.2s linear;
            -ms-transition: all 0.2s linear;
            -o-transition: all 0.2s linear;
            transition: all 0.2s linear;
          }

          .dz-preview.dz-complete .dz-progress {
            opacity: 0;
            -webkit-transition: opacity 0.4s ease-in;
            -moz-transition: opacity 0.4s ease-in;
            -ms-transition: opacity 0.4s ease-in;
            -o-transition: opacity 0.4s ease-in;
            transition: opacity 0.4s ease-in;
          }

          .dz-preview:not(.dz-processing) .dz-progress {
            -webkit-animation: pulse 6s ease infinite;
            -moz-animation: pulse 6s ease infinite;
            -ms-animation: pulse 6s ease infinite;
            -o-animation: pulse 6s ease infinite;
            animation: pulse 6s ease infinite;
          }

          .dz-preview .dz-progress {
            opacity: 1;
            z-index: 1000;
            pointer-events: none;
            position: absolute;
            height: 16px;
            left: 50%;
            top: 50%;
            margin-top: -8px;
            width: 80px;
            margin-left: -40px;
            background: rgba(255, 255, 255, 0.9);
            -webkit-transform: scale(1);
            border-radius: 8px;
            overflow: hidden;
          }

          .dz-preview .dz-progress .dz-upload {
            background: #333;
            background: linear-gradient(to bottom, #666, #444);
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 0;
            -webkit-transition: width 300ms ease-in-out;
            -moz-transition: width 300ms ease-in-out;
            -ms-transition: width 300ms ease-in-out;
            -o-transition: width 300ms ease-in-out;
            transition: width 300ms ease-in-out;
          }

          .dz-preview.dz-error .dz-error-message {
            display: block;
          }

          .dz-preview.dz-error:hover .dz-error-message {
            opacity: 1;
            pointer-events: auto;
          }

          .dz-preview .dz-error-message {
            pointer-events: none;
            z-index: 1000;
            position: absolute;
            display: block;
            display: none;
            opacity: 0;
            -webkit-transition: opacity 0.3s ease;
            -moz-transition: opacity 0.3s ease;
            -ms-transition: opacity 0.3s ease;
            -o-transition: opacity 0.3s ease;
            transition: opacity 0.3s ease;
            border-radius: 8px;
            font-size: 13px;
            top: 130px;
            left: -10px;
            width: 140px;
            background: #be2626;
            background: linear-gradient(to bottom, #be2626, #a92222);
            padding: 0.5em 1.2em;
            color: #fff;
          }

          .dz-preview .dz-error-message:after {
            content: "";
            position: absolute;
            top: -6px;
            left: 64px;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #be2626;
          }

          .loading__page#loading {
            display: block;
            position: fixed;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
          }

          @-webkit-keyframes honeycomb {
            0%, 20%, 80%, 100% {
              opacity: 0;
              -webkit-transform: scale(0);
              transform: scale(0);
            }
            30%, 70% {
              opacity: 1;
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
          @keyframes honeycomb {
            0%, 20%, 80%, 100% {
              opacity: 0;
              -webkit-transform: scale(0);
              transform: scale(0);
            }
            30%, 70% {
              opacity: 1;
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
          .honeycomb {
            height: 24px;
            position: relative;
            width: 24px;
          }

          .honeycomb div {
            -webkit-animation: honeycomb 2.1s infinite backwards;
            animation: honeycomb 2.1s infinite backwards;
            background: #55C8BD;
            height: 12px;
            margin-top: 6px;
            position: absolute;
            width: 24px;
          }

          .honeycomb div:after,
          .honeycomb div:before {
            content: "";
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            position: absolute;
            left: 0;
            right: 0;
          }

          .honeycomb div:after {
            top: -6px;
            border-bottom: 6px solid #55C8BD;
          }

          .honeycomb div:before {
            bottom: -6px;
            border-top: 6px solid #55C8BD;
          }

          .honeycomb div:nth-child(1) {
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
            left: -28px;
            top: 0;
          }

          .honeycomb div:nth-child(2) {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
            left: -14px;
            top: 22px;
          }

          .honeycomb div:nth-child(3) {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
            left: 14px;
            top: 22px;
          }

          .honeycomb div:nth-child(4) {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
            left: 28px;
            top: 0;
          }

          .honeycomb div:nth-child(5) {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
            left: 14px;
            top: -22px;
          }

          .honeycomb div:nth-child(6) {
            -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
            left: -14px;
            top: -22px;
          }

          .honeycomb div:nth-child(7) {
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
            left: 0;
            top: 0;
          }

          /*------------------------------------------------
          ** Animate
          **------------------------------------------------*/
          @keyframes zoomIcon {
            25% {
              transform: scale(1.1, 1.1);
            }
            50% {
              transform: scale(1.2, 1.2);
            }
            75% {
              transform: scale(1.1, 1.1);
            }
          }
          @keyframes mymove {
            0% {
              -webkit-transform: scale(0.2);
              -moz-transform: scale(0.2);
              -ms-transform: scale(0.2);
              -o-transform: scale(0.2);
              transform: scale(0.2);
            }
            25% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
            75% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
            100% {
              -webkit-transform: scale(0.1);
              -moz-transform: scale(0.1);
              -ms-transform: scale(0.1);
              -o-transform: scale(0.1);
              transform: scale(0.1);
            }
          }
          @keyframes ring {
            0% {
              transform: rotate(0deg) scale(1) skew(1deg);
            }
            10% {
              transform: rotate(-25deg) scale(1) skew(1deg);
            }
            20% {
              transform: rotate(25deg) scale(1) skew(1deg);
            }
            30% {
              transform: rotate(-25deg) scale(1) skew(1deg);
            }
            40% {
              transform: rotate(25deg) scale(1) skew(1deg);
            }
            50% {
              transform: rotate(0deg) scale(1) skew(1deg);
            }
            100% {
              transform: rotate(0deg) scale(1) skew(1deg);
            }
          }
          @keyframes ring-circle {
            0% {
              opacity: 0.1;
              transform: rotate(0deg) scale(0.5) skew(1deg);
            }
            30% {
              opacity: 0.5;
              transform: rotate(0deg) scale(0.7) skew(1deg);
            }
            100% {
              opacity: 0.6;
              transform: rotate(0deg) scale(1) skew(1deg);
            }
          }
          @keyframes goDown {
            0% {
              top: -100px;
            }
            100% {
              top: 0;
            }
          }
          .container {
            width: 100%;
            display: block;
            padding: 0 10px;
            height: 100%;
            max-width: 1190px;
            margin: 0 auto;
          }
          .container.full {
            max-width: 1860px;
            width: 100%;
          }
          .container.no-gutters {
            padding: 0;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            margin-left: -10px;
            margin-right: -10px;
          }

          .row.no-gutters {
            margin-left: 0;
            margin-right: 0;
          }

          .col {
            padding-left: 10px;
            padding-right: 10px;
          }

          .row.no-gutters .col {
            padding-left: 0;
            padding-right: 0;
          }

          .c-0 {
            display: none;
          }

          .c-1 {
            flex: 0 0 8.33333%;
            max-width: 8.33333%;
          }

          .c-2 {
            flex: 0 0 16.66667%;
            max-width: 16.66667%;
          }

          .c-3 {
            flex: 0 0 25%;
            max-width: 25%;
          }

          .c-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
          }

          .c-5 {
            flex: 0 0 41.66667%;
            max-width: 41.66667%;
          }

          .c-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }

          .c-7 {
            flex: 0 0 58.33333%;
            max-width: 58.33333%;
          }

          .c-8 {
            flex: 0 0 66.66667%;
            max-width: 66.66667%;
          }

          .c-9 {
            flex: 0 0 75%;
            max-width: 75%;
          }

          .c-10 {
            flex: 0 0 83.33333%;
            max-width: 83.33333%;
          }

          .c-11 {
            flex: 0 0 91.66667%;
            max-width: 91.66667%;
          }

          .c-12 {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .c-o-1 {
            margin-left: 8.33333%;
          }

          .c-o-2 {
            margin-left: 16.66667%;
          }

          .c-o-3 {
            margin-left: 25%;
          }

          .c-o-4 {
            margin-left: 33.33333%;
          }

          .c-o-5 {
            margin-left: 41.66667%;
          }

          .c-o-6 {
            margin-left: 50%;
          }

          .c-o-7 {
            margin-left: 58.33333%;
          }

          .c-o-8 {
            margin-left: 66.66667%;
          }

          .c-o-9 {
            margin-left: 75%;
          }

          .c-o-10 {
            margin-left: 83.33333%;
          }

          .c-o-11 {
            margin-left: 91.66667%;
          }

          /* >= Tablet */
          @media (min-width: 740px) {
            .row {
              margin-left: -8px;
              margin-right: -8px;
            }
            .col {
              padding-left: 8px;
              padding-right: 8px;
            }
            .mc-0 {
              display: none;
            }
            .mc-1,
            .mc-2,
            .mc-3,
            .mc-4,
            .mc-5,
            .mc-6,
            .mc-7,
            .mc-8,
            .mc-9,
            .mc-10,
            .mc-11,
            .mc-12 {
              display: block;
            }
            .mc-1 {
              flex: 0 0 8.33333%;
              max-width: 8.33333%;
            }
            .mc-2 {
              flex: 0 0 16.66667%;
              max-width: 16.66667%;
            }
            .mc-3 {
              flex: 0 0 25%;
              max-width: 25%;
            }
            .mc-4 {
              flex: 0 0 33.33333%;
              max-width: 33.33333%;
            }
            .mc-5 {
              flex: 0 0 41.66667%;
              max-width: 41.66667%;
            }
            .mc-6 {
              flex: 0 0 50%;
              max-width: 50%;
            }
            .mc-7 {
              flex: 0 0 58.33333%;
              max-width: 58.33333%;
            }
            .mc-8 {
              flex: 0 0 66.66667%;
              max-width: 66.66667%;
            }
            .mc-9 {
              flex: 0 0 75%;
              max-width: 75%;
            }
            .mc-10 {
              flex: 0 0 83.33333%;
              max-width: 83.33333%;
            }
            .mc-11 {
              flex: 0 0 91.66667%;
              max-width: 91.66667%;
            }
            .mc-12 {
              flex: 0 0 100%;
              max-width: 100%;
            }
            .mc-o-1 {
              margin-left: 8.33333%;
            }
            .mc-o-2 {
              margin-left: 16.66667%;
            }
            .mc-o-3 {
              margin-left: 25%;
            }
            .mc-o-4 {
              margin-left: 33.33333%;
            }
            .mc-o-5 {
              margin-left: 41.66667%;
            }
            .mc-o-6 {
              margin-left: 50%;
            }
            .mc-o-7 {
              margin-left: 58.33333%;
            }
            .mc-o-8 {
              margin-left: 66.66667%;
            }
            .mc-o-9 {
              margin-left: 75%;
            }
            .mc-o-10 {
              margin-left: 83.33333%;
            }
            .mc-o-11 {
              margin-left: 91.66667%;
            }
          }
          /* PC medium resolution > */
          @media (min-width: 1113px) {
            .row {
              margin-left: -10px;
              margin-right: -10px;
            }
            .row.smc-gutter {
              margin-left: -5px;
              margin-right: -5px;
            }
            .col {
              padding-left: 10px;
              padding-right: 10px;
            }
            .row.smc-gutter .col {
              padding-left: 5px;
              padding-right: 5px;
            }
            .l-0 {
              display: none;
            }
            .l-1,
            .l-2,
            .l-2-4,
            .l-3,
            .l-4,
            .l-5,
            .l-6,
            .l-7,
            .l-8,
            .l-9,
            .l-10,
            .l-11,
            .l-12 {
              display: block;
            }
            .l-1 {
              flex: 0 0 8.33333%;
              max-width: 8.33333%;
            }
            .l-2 {
              flex: 0 0 16.66667%;
              max-width: 16.66667%;
            }
            .l-2-4 {
              flex: 0 0 20%;
              max-width: 20%;
            }
            .l-3 {
              flex: 0 0 25%;
              max-width: 25%;
            }
            .l-4 {
              flex: 0 0 33.33333%;
              max-width: 33.33333%;
            }
            .l-5 {
              flex: 0 0 41.66667%;
              max-width: 41.66667%;
            }
            .l-6 {
              flex: 0 0 50%;
              max-width: 50%;
            }
            .l-7 {
              flex: 0 0 58.33333%;
              max-width: 58.33333%;
            }
            .l-8 {
              flex: 0 0 66.66667%;
              max-width: 66.66667%;
            }
            .l-9 {
              flex: 0 0 75%;
              max-width: 75%;
            }
            .l-10 {
              flex: 0 0 83.33333%;
              max-width: 83.33333%;
            }
            .l-11 {
              flex: 0 0 91.66667%;
              max-width: 91.66667%;
            }
            .l-12 {
              flex: 0 0 100%;
              max-width: 100%;
            }
            .l-o-0 {
              margin-left: 0;
            }
            .l-o-1 {
              margin-left: 8.33333%;
            }
            .l-o-2 {
              margin-left: 16.66667%;
            }
            .l-o-3 {
              margin-left: 25%;
            }
            .l-o-4 {
              margin-left: 33.33333%;
            }
            .l-o-5 {
              margin-left: 41.66667%;
            }
            .l-o-6 {
              margin-left: 50%;
            }
            .l-o-7 {
              margin-left: 58.33333%;
            }
            .l-o-8 {
              margin-left: 66.66667%;
            }
            .l-o-9 {
              margin-left: 75%;
            }
            .l-o-10 {
              margin-left: 83.33333%;
            }
            .l-o-11 {
              margin-left: 91.66667%;
            }
          }
          /* Tablet - PC low resolution */
          @media (min-width: 740px) and (max-width: 1023px) {
            .container {
              max-width: 644px;
            }
          }
          /* > PC low resolution */
          @media (min-width: 1024px) and (max-width: 1239px) {
            .container {
              width: 984px;
            }
            .container .row {
              margin-left: -10px;
              margin-right: -10px;
            }
            .container .row.smc-gutter {
              margin-left: -5px;
              margin-right: -5px;
            }
            .container .row.no-gutters {
              margin-left: 0;
              margin-right: 0;
            }
            .container .col {
              padding-left: 10px;
              padding-right: 10px;
            }
            .container .row.smc-gutter .col {
              padding-left: 5px;
              padding-right: 5px;
            }
            .container .l-0 {
              display: none;
            }
            .container .l-1,
            .container .l-2,
            .container .l-2-4,
            .container .l-3,
            .container .l-4,
            .container .l-5,
            .container .l-6,
            .container .l-7,
            .container .l-8,
            .container .l-9,
            .container .l-10,
            .container .l-11,
            .container .l-12 {
              display: block;
            }
            .container .l-1 {
              flex: 0 0 8.33333%;
              max-width: 8.33333%;
            }
            .container .l-2 {
              flex: 0 0 16.66667%;
              max-width: 16.66667%;
            }
            .container .l-2-4 {
              flex: 0 0 20%;
              max-width: 20%;
            }
            .container .l-3 {
              flex: 0 0 25%;
              max-width: 25%;
            }
            .container .l-4 {
              flex: 0 0 33.33333%;
              max-width: 33.33333%;
            }
            .container .l-5 {
              flex: 0 0 41.66667%;
              max-width: 41.66667%;
            }
            .container .l-6 {
              flex: 0 0 50%;
              max-width: 50%;
            }
            .container .l-7 {
              flex: 0 0 58.33333%;
              max-width: 58.33333%;
            }
            .container .l-8 {
              flex: 0 0 66.66667%;
              max-width: 66.66667%;
            }
            .container .l-9 {
              flex: 0 0 75%;
              max-width: 75%;
            }
            .container .l-10 {
              flex: 0 0 83.33333%;
              max-width: 83.33333%;
            }
            .container .l-11 {
              flex: 0 0 91.66667%;
              max-width: 91.66667%;
            }
            .container .l-12 {
              flex: 0 0 100%;
              max-width: 100%;
            }
            .container .l-o-0 {
              margin-left: 0;
            }
            .container .l-o-1 {
              margin-left: 8.33333%;
            }
            .container .l-o-2 {
              margin-left: 16.66667%;
            }
            .container .l-o-3 {
              margin-left: 25%;
            }
            .container .l-o-4 {
              margin-left: 33.33333%;
            }
            .container .l-o-5 {
              margin-left: 41.66667%;
            }
            .container .l-o-6 {
              margin-left: 50%;
            }
            .container .l-o-7 {
              margin-left: 58.33333%;
            }
            .container .l-o-8 {
              margin-left: 66.66667%;
            }
            .container .l-o-9 {
              margin-left: 75%;
            }
            .container .l-o-10 {
              margin-left: 83.33333%;
            }
            .container .l-o-11 {
              margin-left: 91.66667%;
            }
          }
          .news-title {
            margin-bottom: 20px;
            color: #2F7682;
          }
          .news-page__frame {
            padding-bottom: 0;
          }
          .news-page__detail .box-heading {
            text-transform: initial;
          }
          .news-detail__wrap {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 20px;
          }
          .news-detail__wrap--info {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .news-detail__wrap--info .dots {
            background: #a5a5a5;
          }
          .news-detail__wrap a {
            color: #797979;
          }
          .news-detail__wrap a:hover {
            color: #2F7682;
          }
          .news-detail__wrap--category {
            display: block;
            padding: 6px 8px;
            border-radius: 6px;
            background: #e9e9e9;
          }
          .news-detail__wrap--category:hover {
            background: #eaf1f3;
          }
          .news-detail__wrap--published {
            font-weight: 500;
            color: #a5a5a5;
            line-height: 1;
            letter-spacing: 2.4px;
          }
          .news-detail__wrap--category, .news-detail__wrap--published {
            font-size: 12px;
          }
          .news-detail__wrap--social .fblike {
            transform: translateY(5px);
          }
          .news-detail__main {
            overflow: hidden;
          }
          .news-detail__main--desc {
            margin-bottom: 20px;
          }
          .news-detail .box-action {
            margin-top: 20px;
            width: fit-content;
          }
          .news .item-link {
            display: block;
          }
          .news .item-index {
            color: #797979;
          }
          .news .item-frame {
            border-radius: 8px;
            border: 1px solid #e9e9e9;
            overflow: hidden;
          }
          .news .item-image {
            background: #e6ecf6;
          }
          .news .item-image img {
            display: block;
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
          }
          .news .item-content {
            background: #fff;
            padding: 16px;
          }
          .news .item-content__title {
            color: #1F1F1F;
            height: 60px;
            font-size: 20px;
            font-weight: 700;
            font-family: "Barlow Condensed", sans-serif;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .news .item-content__wrap {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 4px 0 10px;
          }
          .news .item-content__wrap .dots {
            background: #e9e9e9;
          }
          .news .item-content__category, .news .item-content__published {
            color: #797979;
            font-size: 12px;
          }
          .news .item-content__desc {
            height: 48px;
            color: #4c4c4c;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .news .item:hover .item-frame {
            box-shadow: 3px 6px 12px 0px rgba(52, 61, 55, 0.12);
          }
          .news .item:hover .item-index {
            color: #2F7682;
          }
          .news .item:hover .item-content__title {
            color: #55C8BD;
          }

          .contact-info {
            padding: 20px;
            background: #eefaf8;
            border-radius: 12px;
          }
          .contact-info__item {
            margin-bottom: 12px;
            color: #2F7682;
            font-size: 20px;
          }
          .contact-info__item:last-child {
            margin-bottom: 0;
          }
          .contact-info__item--icon i {
            transform: translateY(1px);
          }
          .contact-info__item--link {
            width: fit-content;
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .contact-info__item a:hover {
            color: #FD615A;
          }
          .contact-form {
            margin-top: 20px;
            position: relative;
          }

          .page-error {
            width: 100%;
            height: 100%;
            border-top: 10px solid #FD615A;
          }
          .page-error p {
            display: block;
            text-align: center;
            font-size: 24px;
          }
          .page-error .container-wrapper {
            padding: 10px;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .page-error .container-wrapper .image {
            padding-top: 5%;
          }
          .page-error .container-wrapper .content {
            margin: auto;
          }
          .page-error .container-wrapper .content h1 {
            font-weight: 700;
            font-size: 15rem;
            line-height: 1;
            color: #FD615A;
          }
          .page-error .container-wrapper .content a.back {
            margin-top: 20px;
            font-size: 25px;
            color: #FD615A;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page-error .container-wrapper .content a.back .fa {
            font-size: 20px;
          }
          .page-error .container-wrapper .content a.back:hover {
            color: #1F1F1F;
          }
          .page-error .container-wrapper .content .note {
            font-size: 16px;
          }

          .page-maintain {
            width: 100%;
            height: 100%;
            border-top: 10px solid #FD615A;
          }
          .page-maintain p {
            display: block;
            text-align: center;
            font-size: 24px;
          }
          .page-maintain .container-wrapper {
            padding: 10px;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .page-maintain .container-wrapper .image {
            padding-top: 5%;
          }
          .page-maintain .container-wrapper .content {
            margin: auto;
          }
          .page-maintain .container-wrapper .content h1 {
            font-weight: 700;
            font-size: 15rem;
            line-height: 1;
            color: #FD615A;
          }
          .page-maintain .container-wrapper .content .back {
            margin-top: 20px;
            font-size: 25px;
            color: #FD615A;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page-maintain .container-wrapper .content .note {
            font-size: 16px;
          }

          .house-page .house-list {
            width: calc(75% - 10px);
          }
          .house-page .house-sidebar {
            width: calc(25% - 10px);
          }
          .house-flex {
            display: flex;
            gap: 20px;
          }
          .house-list {
            position: relative;
          }
          .house-list .item {
            height: 100%;
          }
          .house-list .item-frame {
            display: flex;
            flex-direction: column;
            height: 100%;
            border-radius: 10px;
            box-shadow: 2px 4px 8px 0px rgba(52, 61, 55, 0.12);
            overflow: hidden;
          }
          .house-list .item-frame .video__link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 4px;
            border-radius: 4px;
            background: #eefaf8;
            border: 1px solid transparent;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .house-list .item-frame .video__link:hover {
            border-color: #2F7682;
          }
          .house-list .item-frame .video__thumb {
            position: relative;
            border-radius: 4px;
            overflow: hidden;
          }
          .house-list .item-frame .video__thumb img {
            display: block;
            width: 80px;
            aspect-ratio: 16/9;
            object-fit: cover;
          }
          .house-list .item-frame .video__wrap {
            width: calc(100% - 92px);
          }
          .house-list .item-frame .video__icon {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .house-list .item-frame .video__icon i {
            color: #fff;
          }
          .house-list .item-frame .video__action {
            color: #2F7682;
            font-size: 12px;
          }
          .house-list .item-frame .video__title {
            color: #1F1F1F;
            font-size: 14px;
            font-weight: 600;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .house-list .item-thumb {
            width: 100%;
            background: #f8b4e4;
            position: relative;
            overflow: hidden;
          }
          .house-list .item-thumb__slider {
            margin-bottom: 0;
          }
          .house-list .item-thumb__slider--link {
            display: block;
          }
          .house-list .item-thumb__slider img {
            display: block;
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
          }
          .house-list .item-thumb__slider > button {
            display: none !important;
            background: #fff;
            width: 30px;
            height: 30px;
            opacity: 0.6;
          }
          .house-list .item-thumb__slider > button::before {
            color: #1F1F1F;
            line-height: 1;
            font-size: 12px;
          }
          .house-list .item-thumb__slider > button:hover {
            opacity: 1;
          }
          .house-list .item-thumb__slider > button.slick-prev {
            left: 16px;
            right: auto;
          }
          .house-list .item-thumb__slider > button.slick-prev::before {
            content: "\f053";
          }
          .house-list .item-thumb__slider > button.slick-next {
            right: 16px;
            left: auto;
          }
          .house-list .item-thumb__slider > button.slick-next::before {
            content: "\f054";
          }
          .house-list .item-thumb__slider > .slick-dots {
            bottom: 10px;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(42, 42, 51, 0.6);
            padding: 2px 4px;
            border-radius: 999px;
            gap: 8px;
          }
          .house-list .item-thumb__slider > .slick-dots li {
            display: block;
            margin: 0;
          }
          .house-list .item-thumb__slider > .slick-dots li button {
            background: #fff;
            width: 6px;
            height: 6px;
            padding: 0;
            opacity: 0.6;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .house-list .item-thumb__slider > .slick-dots .slick-active button {
            opacity: 1;
            transform: scale(1.2);
          }
          .house-list .item-thumb:hover .item-thumb__slider > button {
            opacity: 1;
            display: inline-block !important;
          }
          .house-list .item-tag {
            position: absolute;
            top: 16px;
            left: 16px;
            width: fit-content;
            border-radius: 6px;
            padding: 12px;
            color: #fff;
            font-size: 12px;
            white-space: nowrap;
          }
          .house-list .item-tag.avai {
            background: #55C8BD;
          }
          .house-list .item-tag.no-avai {
            background: #FD615A;
          }
          .house-list .item-content {
            flex: 1;
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .house-list .item-content__link {
            color: #1F1F1F;
            font-size: 26px;
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 700;
            margin-bottom: 16px;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .house-list .item-content__info {
            margin-bottom: 10px;
          }
          .house-list .item-content__info--subitem {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #797979;
            font-size: 12px;
            margin-bottom: 4px;
          }
          .house-list .item-content__info--subitem a {
            color: #797979;
          }
          .house-list .item-content__info--subitem a:hover {
            text-decoration: underline;
            color: #2F7682;
          }
          .house-list .item-content__info--subitem:last-child {
            margin-bottom: 0;
          }
          .house-list .item-content__info--icon {
            min-width: 18px;
          }
          .house-list .item-content__info--icon i {
            font-size: 14px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .house-list .item-content__detail {
            display: flex;
            gap: 12px;
          }
          .house-list .item-content__detail--subitem {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 4px;
            width: fit-content;
          }
          .house-list .item-content__detail--subitem:last-child {
            margin-bottom: 0;
          }
          .house-list .item-content__detail--subitem .dots {
            width: 6px;
            height: 6px;
            background: #acc8cd;
          }
          .house-list .item-content__price {
            margin-top: 16px;
          }
          .house-list .item-content__price--deposit {
            margin-bottom: 10px;
            color: #797979;
            font-weight: 500;
            text-transform: capitalize;
          }
          .house-list .item-content__price--main {
            display: flex;
            align-items: flex-end;
            gap: 8px;
          }
          .house-list .item-content__price--number {
            color: #FD615A;
            font-size: 40px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
            line-height: 1;
          }
          .house-list .item-content__price--month {
            color: #797979;
          }
          .house-list .item-content__action {
            display: flex;
            gap: 16px;
            margin-top: 20px;
          }
          .house-list .item-content__video {
            margin-bottom: 20px;
          }
          .house-list .item:hover .item-frame {
            box-shadow: 3px 6px 16px 0px rgba(52, 61, 55, 0.16);
          }
          .house-list .item:hover .item-content__link {
            color: #2F7682;
          }
          .house-sidebar {
            padding: 0 10px;
          }
          .house-sidebar.scroll {
            height: 765px;
            overflow-y: auto;
          }
          .house-sidebar__header {
            margin-bottom: 32px;
          }
          .house-sidebar__header .btn-map,
          .house-sidebar__header .btn-block {
            cursor: pointer;
            color: #4c4c4c;
            width: 44px;
            height: 44px;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            background: #eaf1f3;
            display: flex;
          }
          .house-sidebar__header .btn-map.active,
          .house-sidebar__header .btn-block.active {
            color: #fff;
            background: #2F7682;
          }
          .house-sidebar__header .btn-map.active svg path,
          .house-sidebar__header .btn-block.active svg path {
            fill: #fff;
          }
          .house-sidebar__header .btn-map.hide,
          .house-sidebar__header .btn-block.hide {
            display: none;
          }
          .house-sidebar .btns-wrap {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .house-sidebar__frame {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .house-sidebar__field--subtitle {
            margin-bottom: 8px;
            font-size: 18px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
          }
          .house-sidebar__field--frame {
            position: relative;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px 20px;
          }
          .house-sidebar__field--item {
            width: calc(50% - 10px);
          }
          .house-sidebar__field--search {
            width: 100%;
          }
          .house-sidebar__field--note {
            display: block;
            margin-top: 4px;
            font-size: 12px;
            color: #797979;
          }
          .house-sidebar__field--showmore {
            cursor: pointer;
            font-size: 13px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            line-height: 1;
            color: #2F7682;
          }
          .house-sidebar__field--showmore i {
            color: #4c4c4c;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .house-sidebar__field--showmore i::before {
            transform: translateY(4px);
          }
          .house-sidebar__field--showmore:hover {
            color: #55C8BD;
          }
          .house-sidebar__field--showmore.active i {
            transform: rotate(180deg);
          }
          .house-sidebar__field.field-form .house-sidebar__field--title {
            margin-bottom: 12px;
          }
          .house-sidebar__action {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 32px;
          }
          .house-sidebar__action a {
            margin-left: auto;
          }
          .house-sidebar input[type=checkbox] + label {
            font-size: 14px;
          }
          .house-sidebar .calendar {
            display: flex;
            width: 100%;
            border: 1px solid #4c4c4c;
            border-radius: 4px;
            overflow: hidden;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .house-sidebar .calendar input {
            border: none;
            background: transparent;
            width: calc(100% - 56px);
            cursor: text;
          }
          .house-sidebar .calendar button {
            cursor: pointer;
            width: 56px;
            border: none;
            outline: none;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .house-sidebar .calendar button.active, .house-sidebar .calendar button:hover {
            background: #2F7682;
            color: #fff;
          }
          .house-sidebar #calendarAvl {
            display: none;
          }
          .house-sidebar #calendarAvl .ui-widget.ui-widget-content {
            padding: 10px;
            background: #eefaf8;
          }
          .house-sidebar #calendarAvl .ui-widget-content,
          .house-sidebar #calendarAvl .ui-widget-header {
            border-color: #eee;
          }
          .house-sidebar #calendarAvl .ui-datepicker td .ui-state-default {
            font-size: 16px;
            padding: 8px 4px;
            border: 1px solid transparent;
            border-radius: 4px;
          }
          .house-sidebar #calendarAvl .ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {
            border: none;
            outline: none;
            background: #fff;
            color: #1F1F1F;
            font-family: "Barlow Condensed", sans-serif;
            opacity: 1;
            font-weight: 500;
            padding: 6px 14px;
            float: right;
            margin: 10px 0 0;
            border: 1px solid #2F7682;
          }
          .house-sidebar #calendarAvl .ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current:hover {
            background: #2F7682;
            color: #fff;
          }
          .house-sidebar #calendarAvl .ui-datepicker select.ui-datepicker-month,
          .house-sidebar #calendarAvl .ui-datepicker select.ui-datepicker-year {
            outline: none;
            border-color: #2F7682;
            color: #1F1F1F;
            font-weight: 600;
            border-radius: 4px;
            background: #fff;
            padding: 4px 8px;
          }
          .house-sidebar #calendarAvl .ui-datepicker .ui-datepicker-title {
            display: flex;
            justify-content: center;
            gap: 10px;
          }
          .house-sidebar #calendarAvl .ui-datepicker td .ui-state-default.ui-state-hover {
            border-color: #2F7682;
          }
          .house-sidebar #calendarAvl .ui-datepicker td .ui-state-default.ui-state-highlight {
            background: #FD615A;
            color: #fff;
          }
          .house-sidebar #calendarAvl .ui-datepicker td .ui-state-default.ui-state-active {
            background: #2F7682;
            color: #fff;
          }
          .house-sidebar #fieldDate {
            display: none;
          }
          .house-detail__image--main .house-detail__image--item:hover img {
            transform: scale(1.1);
          }
          .house-detail__image--nav {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
          }
          .house-detail__image--nav .house-detail__image--item {
            width: 25%;
            border: 2px solid transparent;
          }
          .house-detail__image--nav .house-detail__image--item:hover {
            border-color: #55C8BD;
          }
          .house-detail__image--item {
            position: relative;
            display: block;
            width: 100%;
            overflow: hidden;
          }
          .house-detail__image--item .show-more {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            line-height: 1;
            color: #fff;
            background: linear-gradient(0deg, rgba(47, 118, 130, 0.7) 0%, rgba(47, 118, 130, 0.7) 100%);
          }
          .house-detail__image--item .show-more i {
            font-size: 20px;
          }
          .house-detail__image--item img {
            display: block;
            width: 100%;
            aspect-ratio: 16/10;
            object-fit: cover;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .house-detail__info--frame {
            padding: 0 20px;
          }
          .house-detail__info--wrap {
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .house-detail__title {
            font-size: 36px;
            text-transform: capitalize;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .house-detail__address {
            display: flex;
            gap: 8px;
            font-size: 12px;
            color: #797979;
          }
          .house-detail__address p {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .house-detail__address i {
            font-size: 18px;
          }
          .house-detail__type a {
            display: block;
            width: fit-content;
            padding: 6px 8px;
            background: #1f1f1f;
            border-radius: 6px;
            font-size: 12px;
            color: #fff;
          }
          .house-detail__type a:hover {
            color: #fff;
            background: #88d9d1;
          }
          .house-detail__features {
            display: flex;
            width: fit-content;
            padding: 16px 20px;
            gap: 20px;
            background: #eefaf8;
          }
          .house-detail__features--item {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            font-family: "Barlow Condensed", sans-serif;
            font-size: 20px;
            font-weight: 700;
          }
          .house-detail__features--item sup {
            font-size: 14px;
          }
          .house-detail__features--icon {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .house-detail__features--icon i {
            font-size: 28px;
            color: #55C8BD;
          }
          .house-detail__price {
            display: flex;
            align-items: flex-end;
            gap: 8px;
            color: #797979;
          }
          .house-detail__price--number {
            color: #FD615A;
            font-size: 48px;
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 600;
            line-height: 1;
          }
          .house-detail__action {
            display: flex;
            gap: 20px;
            margin-top: 20px;
          }
          .house-detail__nav {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .house-detail__nav--item {
            position: relative;
            padding-left: 14px;
            min-width: calc((100% - 40px) / 3);
          }
          .house-detail__nav--item .dots {
            width: 6px;
            height: 6px;
            position: absolute;
            background: #acc8cd;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          .house-detail__amenities .house-detail__nav--item {
            width: calc(50% - 10px);
          }
          .house-detail__content {
            padding: 40px 0;
          }
          .house-detail__content--main {
            margin-top: 20px;
          }
          .house-detail__content--frame {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
          .house-detail__content--action {
            margin-top: 20px;
          }
          .house-detail__video--frame {
            margin-top: 20px;
            position: relative;
            padding-top: 56.25%;
          }
          .house-detail__video #videoReview {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            border: 2px solid #2F7682;
          }
          .house-detail__video #videoReview iframe {
            width: 100%;
            height: 100%;
          }
          .house-booking__form {
            padding-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          .house-booking__time {
            height: 100%;
            display: flex;
            flex-direction: column;
            /* Scrollbar Styling */
          }
          .house-booking__time--frame {
            height: 100%;
            position: relative;
          }
          .house-booking__time--nav {
            position: absolute;
            padding: 0px 10px 16px 0;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow-y: scroll;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .house-booking__time--nav .item-time {
            width: calc((100% - 40px) / 3);
            border: none;
            padding: 12px 16px;
            border-radius: 2px;
            background: #eefaf8;
            color: #2F7682;
            font-size: 18px;
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 600;
            outline: none;
          }
          .house-booking__time--nav .item-time:hover {
            box-shadow: 3px 6px 16px 0px rgba(52, 61, 55, 0.16);
          }
          .house-booking__time--nav .item-time.pick {
            background: #2F7682;
            color: #fff;
            box-shadow: none;
          }
          .house-booking__time--nav .item-time.disable {
            cursor: initial;
            background: #eee;
            color: #ccc;
          }
          .house-booking__time--nav .item-time.disable:hover {
            box-shadow: none;
          }
          .house-booking__time ::-webkit-scrollbar {
            position: absolute;
            left: 100%;
            width: 4px;
          }
          .house-booking__time ::-webkit-scrollbar-track {
            background-color: #ebebeb;
            -webkit-border-radius: 10px;
            border-radius: 10px;
          }
          .house-booking__time ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: #6d6d6d;
          }
          .house-booking__date {
            padding: 0 28px 20px;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0px 8px 14px 0px rgba(158, 158, 158, 0.16);
          }
          .house-booking__date--choose {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 4px;
          }
          .house-booking__date--choose input {
            display: block;
            text-align: center;
            padding: 10px 20px;
            height: 40px;
            max-width: 200px;
            margin: 0 auto;
          }
          .house-booking__pets--frame {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          .house-booking__pets--item {
            width: 100%;
          }
          .house-booking__questions .form {
            gap: 40px;
          }
          .house-booking__action {
            display: flex;
            gap: 20px;
          }
          .house-booking .house-rental__pricing {
            display: none;
          }
          .house-booking .house-rental__program {
            display: none;
          }
          .house-employment__frame {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .house-employment__item {
            width: calc(50% - 10px);
          }
          .house-rental__frame--form .process-list {
            margin: 40px 0;
          }
          .house-rental__frame--form .process-list__wrap {
            display: flex;
            gap: 56px;
            position: relative;
          }
          .house-rental__frame--form .process-list__wrap::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 1px;
            background: #e9e9e9;
          }
          .house-rental__frame--form .process-list__item {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0 8px;
            background: #fff;
          }
          .house-rental__frame--form .process-list__item--index {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            background: #e9e9e9;
            color: #797979;
            font-size: 32px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
          }
          .house-rental__frame--form .process-list__item--label {
            color: #797979;
            font-size: 12px;
            line-height: 1.5;
          }
          .house-rental__frame--form .process-list__item:first-child {
            padding-left: 0;
          }
          .house-rental__frame--form .process-list__item.active .process-list__item--index {
            background: #2F7682;
            color: #fff;
          }
          .house-rental__frame--form .process-list__item.active .process-list__item--label {
            color: #2F7682;
            font-weight: 600;
          }
          .house-rental__frame--form .process-container__header {
            margin-bottom: 20px;
          }
          .house-rental__frame--form .process-container__content--action {
            display: none;
            margin-top: 8px;
          }
          .house-rental__frame--form .process-container__content.hidde .process-container__content--frame {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
          }
          .house-rental__frame--form .process-container__content.hidde .process-container__content--action {
            display: block;
          }
          .house-rental__frame--form .process-container__content.show .process-container__content--action {
            display: block;
          }
          .house-rental__frame--form .process-container__item {
            display: none;
            position: relative;
          }
          .house-rental__frame--form .process-container__item--flex {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          .house-rental__frame--form .process-container__item.active {
            display: block;
          }
          .house-rental__frame--form .process-container__form--emplyment {
            margin: 40px 0;
          }
          .house-rental__frame--form .process-container__agree {
            margin: 20px 0;
          }
          .house-rental__frame--form .process-container .box-desc {
            color: #4c4c4c;
          }
          .house-rental__frame--form .process-action {
            display: flex;
            gap: 20px;
            margin-top: 40px;
          }
          .house-rental__frame--form .process-pets .noti {
            font-size: 12px;
            color: #797979;
            margin-top: 4px;
          }
          .house-rental__program {
            margin-top: 32px;
          }
          .house-rental__pricing {
            margin-top: 32px;
          }
          .house-nav__wrap {
            margin-top: 20px;
          }
          .house-nav__item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 18px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
            margin-bottom: 12px;
          }
          .house-nav__item:last-child {
            margin-bottom: 0;
          }
          .house-nav__icon {
            width: 24px;
            height: 24px;
            text-align: center;
          }
          .house-nav__icon i {
            font-size: 24px;
          }
          .house-title {
            color: #2F7682;
          }
          .house-subtitle {
            font-size: 26px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
          }
          .house-desc {
            color: #4c4c4c;
            margin-bottom: 40px;
          }
          .house-select .select2-container .select2-selection--single {
            border-color: transparent;
          }
          .house-select .select2-container .select2-selection--single:hover, .house-select .select2-container .select2-selection--single:focus {
            color: #2F7682;
          }
          .house-info__cont--title {
            margin-top: 32px;
          }
          .house-info__title {
            color: #55C8BD;
          }
          .house-result {
            height: 100%;
          }
          .house-result__frame h3 {
            font-weight: 500;
            font-size: 22px;
            margin-bottom: 12px;
          }
          .house #loading {
            z-index: 3;
            background: rgba(0, 0, 0, 0.5);
            text-align: center;
            position: fixed;
            inset: 0;
          }
          .house #loading img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 10px;
          }

          .map-result {
            /*
            * Optional: Makes the sample page fill the window.
            */
            /*
            * Always set the map height explicitly to define the size of the div element
            * that contains the map.
            */
            /*
            * Property styles in unhighlighted state.
            */
          }
          .map-result html,
          .map-result body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          .map-result #map {
            height: 100%;
            width: 100%;
          }
          .map-result .location {
            align-items: center;
            background-color: #2F7682;
            border-radius: 50%;
            color: #263238;
            display: flex;
            font-size: 14px;
            gap: 15px;
            height: 30px;
            justify-content: center;
            padding: 4px;
            position: relative;
            position: relative;
            transition: all 0.3s ease-out;
            width: 30px;
            /*
            * Property styles in highlighted state.
            */
          }
          .map-result .location::after {
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-top: 9px solid #2F7682;
            content: "";
            height: 0;
            left: 50%;
            position: absolute;
            top: calc(95% - 1.5px);
            transform: translate(-50%, 0);
            transition: all 0.3s ease-out;
            width: 0;
            z-index: 1;
          }
          .map-result .location .icon {
            align-items: center;
            display: flex;
            justify-content: center;
            color: #ffffff;
          }
          .map-result .location .icon svg {
            height: 20px;
            width: auto;
          }
          .map-result .location .details {
            display: none;
            flex-direction: column;
            flex: 1;
          }
          .map-result .location .details .image {
            margin-bottom: 10px;
          }
          .map-result .location .details .image img {
            width: 100%;
            display: block;
            aspect-ratio: 16/9;
            object-fit: cover;
          }
          .map-result .location .details .address {
            color: #9e9e9e;
            font-size: 10px;
            margin-bottom: 10px;
            margin-top: 5px;
          }
          .map-result .location .details .features {
            align-items: flex-end;
            display: flex;
            flex-direction: row;
            gap: 10px;
          }
          .map-result .location .details .features > div {
            align-items: center;
            background: #f5f5f5;
            border-radius: 5px;
            border: 1px solid #ccc;
            display: flex;
            font-size: 10px;
            gap: 5px;
            padding: 5px;
          }
          .map-result .location.highlight {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
            height: auto;
            padding: 10px;
            width: 300px;
          }
          .map-result .location.highlight .icon {
            display: none;
          }
          .map-result .location.highlight::after {
            top: 100%;
            border-top: 9px solid #ffffff;
          }
          .map-result .location.highlight .details {
            display: flex;
          }
          .map-result .location.highlight .details .icon svg {
            width: 50px;
            height: 50px;
          }
          .map-result .location.highlight .details .title a {
            font-weight: 500;
          }
          .map-result .location.highlight .close {
            margin-left: auto;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50% !important;
          }
          .map-result .location.highlight .close i {
            font-size: 16px;
          }
          .map-result .location.highlight .door {
            color: rgb(165, 12, 12);
          }
          .map-result .location.highlight .bed {
            color: #ffa000;
          }
          .map-result .location.highlight .bath {
            color: #03a9f4;
          }
          .map-result .location.highlight .size {
            color: #388e3c;
          }

          input[type=checkbox] {
            display: none;
          }
          input[type=checkbox] + label {
            width: fit-content;
            display: block;
            position: relative;
            padding-left: 38px;
            margin-bottom: 20px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            text-align: left;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            font-family: "Poppins", sans-serif;
          }
          input[type=checkbox] + label:before {
            content: "✔";
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 26px;
            height: 26px;
            border-radius: 4px;
            border: 2px solid #4c4c4c;
            background: #fff;
            color: #fff;
            font-weight: 600;
            font-size: 18px;
          }
          input[type=checkbox] + label:last-child {
            margin-bottom: 0;
          }
          input[type=checkbox]:hover + label::before {
            color: #a5a5a5;
            box-shadow: 3px 6px 12px rgba(52, 61, 55, 0.12);
          }
          input[type=checkbox]:checked + label::before {
            background: #6d9fa8;
            border-color: #2F7682;
            color: #fff;
            box-shadow: 3px 6px 12px rgba(52, 61, 55, 0.12);
          }
          input[type=checkbox].error + label::before {
            border-color: #FD615A;
            box-shadow: 0 0 4px #fd615a;
          }

          input[type=radio] {
            display: none;
          }
          input[type=radio] + label {
            width: fit-content;
            display: block;
            position: relative;
            padding-left: 38px;
            margin-bottom: 20px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            text-align: left;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            font-family: "Poppins", sans-serif;
          }
          input[type=radio] + label:before {
            content: "";
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 26px;
            height: 26px;
            border-radius: 100%;
            border: 4px solid #e9e9e9;
            background: #a5a5a5;
            color: #fff;
            font-weight: 600;
            font-size: 18px;
          }
          input[type=radio] + label:last-child {
            margin-bottom: 0;
          }
          input[type=radio]:hover + label::before {
            box-shadow: 2px 3px 8px rgba(19, 25, 28, 0.16);
          }
          input[type=radio]:checked + label::before {
            background: #2F7682;
          }
          input[type=radio].error + label::before {
            box-shadow: 0 0 4px #FD615A;
          }

          .switch {
            display: inline-block;
            height: 24px;
            position: relative;
            width: 44px;
          }
          .switch input {
            display: none;
          }

          .slider {
            background-color: #eaeaea;
            bottom: 0;
            cursor: pointer;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: 0.4s;
          }
          .slider:before {
            content: "";
            width: 20px;
            height: 20px;
            position: absolute;
            left: 2px;
            top: 50%;
            transform: translate(0, -50%);
            transition: 0.4s;
            background-color: #827f7f;
          }

          input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input:checked + .slider {
            background-color: #c1e690;
          }
          input:checked + .slider:before {
            transform: translate(100%, -50%);
            background: #356d5d;
          }

          .popup {
            opacity: 0;
            visibility: hidden;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.8);
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .popup-frame {
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 600px;
            border-radius: 20px;
            overflow: hidden;
            padding: 20px 20px 40px;
          }
          .popup-frame__inner {
            padding: 0 20px;
          }
          .popup-frame__inner--image img {
            display: block;
            max-width: 86px;
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: contain;
            margin: auto;
          }
          .popup-frame__inner--content {
            margin-top: 20px;
            text-align: center;
          }
          .popup-frame__inner--content a:hover {
            color: #2F7682;
            text-decoration: underline;
          }
          .popup-house {
            /* Scrollbar Styling */
          }
          .popup-house .popup-frame {
            max-width: 770px;
            width: 100%;
            border-radius: 12px;
            padding: 20px;
          }
          .popup-house__title {
            margin-bottom: 20px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .popup-house__frame {
            margin-top: 12px;
            height: fit-content;
            max-height: calc(80vh - 52px);
            overflow-y: scroll;
            padding-right: 20px;
            margin-right: -20px;
          }
          .popup-house ::-webkit-scrollbar {
            position: absolute;
            left: 100%;
            width: 8px;
          }
          .popup-house ::-webkit-scrollbar-track {
            background-color: #ebebeb;
            -webkit-border-radius: 10px;
            border-radius: 10px;
          }
          .popup-house ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: #6d6d6d;
          }
          .popup-required {
            position: fixed;
            right: 20px;
            top: 100px;
            transform: translateY(100%);
            opacity: 0;
            visibility: hidden;
            z-index: 100;
            background: #fff;
            border-radius: 4px;
            border-left: 3px solid #FD615A;
            box-shadow: 2px 4px 8px 0px rgba(52, 61, 55, 0.12);
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .popup-required__frame {
            padding: 16px 20px;
          }
          .popup-required__title {
            color: #FD615A;
            font-weight: 500;
            font-family: "Barlow Condensed", sans-serif;
            font-size: 18px;
          }
          .popup-required.active {
            transform: translateY(0);
            opacity: 1;
            visibility: initial;
          }
          .popup-close {
            cursor: pointer;
            font-size: 20px;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            color: #4c4c4c;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
          }
          .popup-close:hover {
            opacity: 1;
            background: #eaf1f3;
          }
          .popup.active {
            opacity: 1;
            visibility: initial;
          }

          /*------------------------------------------------
          ** Boxes
          **------------------------------------------------*/
          .box-about__frame--main {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 28px 0;
          }
          .box-about__frame--banner {
            height: 100%;
          }
          .box-about__frame--banner img {
            display: block;
            width: 100%;
            height: 100%;
            aspect-ratio: 16/10;
            object-fit: cover;
          }
          .box-about__content {
            padding: 40px;
            background: #2F7682;
            color: #fff;
          }
          .box-about__content--main {
            margin: 20px 0;
            line-height: 1.6;
          }
          .box-about__bg {
            position: absolute;
            top: 50%;
            right: 0;
          }

          .box-testimonial__slider {
            margin: 0 -10px;
            padding-bottom: 36px;
          }
          .box-testimonial .item {
            margin: 0 10px;
            padding: 40px 20px;
            border-radius: 20px;
            background: #eefaf8;
            height: 100%;
          }
          .box-testimonial .item:nth-child(odd) {
            background: #2F7682;
            color: #fff;
          }
          .box-testimonial .item:nth-child(odd) .item-line {
            background: #fff;
          }
          .box-testimonial .item-frame {
            position: relative;
          }
          .box-testimonial .item-title {
            display: block;
            text-align: center;
            font-size: 26px;
            font-weight: 700;
            font-family: "Barlow Condensed", sans-serif;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .box-testimonial .item-content {
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
          }
          .box-testimonial .item-quote {
            position: absolute;
            left: 0;
            top: -20px;
          }
          .box-testimonial .item-quote svg {
            color: #acc8cd;
          }
          .box-testimonial .item-line {
            width: 100%;
            max-width: 100px;
            margin: 16px auto;
            height: 2px;
            background: #2F7682;
          }

          .box-search {
            padding: 40px 0;
          }
          .box-search__frame--main {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .box-search__frame--main .box-heading {
            font-size: 48px;
            text-transform: capitalize;
          }
          .box-search__frame--list {
            display: flex;
            gap: 20px;
          }
          .box-search__frame--list .item {
            max-width: 135px;
            width: 33.3333333333%;
            padding: 16px;
            background: #eefaf8;
            border-radius: 8px;
            text-align: center;
          }
          .box-search__frame--list .item-icon img {
            display: block;
            width: 40px;
            margin: 0 auto 4px;
            aspect-ratio: 1/1;
            object-fit: contain;
          }
          .box-search__frame--list .item-title {
            font-size: 18px;
            font-weight: 600;
            font-family: "Barlow Condensed", sans-serif;
          }
          .box-search__frame--form {
            padding: 40px;
            border-radius: 20px;
            background: #2F7682;
          }
          .box-search__frame--form .form-action {
            width: 100%;
          }
          .box-search__frame--form .button {
            width: 100%;
          }
          .box-search__frame input {
            padding: 16px 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }

          .box-house__featured {
            padding-top: 0;
          }
          .box-house__featured--action {
            margin-top: 28px;
          }
          .box-house__featured--action a {
            margin: 0 auto;
          }
          .box-house__featured .item-content__link {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            height: 78px;
          }
          .box-house__featured .item-content__price {
            display: none;
          }
          .box-house__relative {
            padding-top: 40px;
          }
          .box-house__relative--frame {
            margin-top: 20px;
          }

          .box-news__update {
            z-index: 1;
            padding-bottom: 0;
          }
          .box-news__update .item {
            margin-bottom: 40px;
          }
          .box-news__update .item:nth-child(even) .row {
            flex-direction: row-reverse;
          }
          .box-news__update .item:last-child {
            margin-bottom: 0;
          }
          .box-news__update .item-frame__banner {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .box-news__update .item-frame__banner img {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            object-fit: contain;
          }
          .box-news__update .item-frame__content {
            padding: 40px;
            background: #fff;
          }
          .box-news__update .item-frame__content--title {
            color: #2F7682;
            font-size: 26px;
            font-weight: 700;
            font-family: "Barlow Condensed", sans-serif;
          }
          .box-news__update .item-frame__content--main {
            margin: 20px 0;
            line-height: 1.6;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
          }
          .box-news__featured--main {
            height: 100%;
          }
          .box-news__featured--main .item {
            height: 100%;
          }
          .box-news__featured--main .item-link {
            height: 100%;
          }
          .box-news__featured--main .item-frame {
            height: 100%;
          }
          .box-news__featured--main .item-content__title {
            height: auto;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .box-news__featured--nav .col {
            margin-bottom: 16px;
          }
          .box-news__featured--nav .col:last-child {
            margin-bottom: 0;
          }
          .box-news__featured--nav .item:last-child {
            margin-bottom: 0;
          }
          .box-news__featured--nav .item-frame {
            display: flex;
          }
          .box-news__featured--nav .item-image {
            width: 182px;
          }
          .box-news__featured--nav .item-image img {
            aspect-ratio: 1/1;
          }
          .box-news__featured--nav .item-content {
            width: calc(100% - 182px);
          }
          .box-news__featured--nav .item-content__title {
            margin-bottom: 12px;
          }
          .box-news__featured--nav .item-content__desc {
            height: 72px;
            -webkit-line-clamp: 3;
          }
          .box-news__featured--nav .item-content__wrap {
            display: none;
          }
          .box-news__latest--frame .col {
            margin-bottom: 16px;
          }
          .box-news__latest--frame .col:last-child {
            margin-bottom: 0;
          }
          .box-news__latest .item-content__flex {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .box-news__latest .item-content__desc {
            height: 72px;
            -webkit-line-clamp: 3;
          }
          .box-news__relative .item {
            margin-bottom: 20px;
          }
          .box-news__relative .item:last-child {
            margin-bottom: 0;
          }

          /*------------------------------------------------
          ** Common
          **------------------------------------------------*/
          .content-detail {
            font-size: 16px;
          }
          .content-detail ul,
          .content-detail ol {
            text-align: left;
            list-style: initial;
            padding-left: 20px;
          }
          .content-detail ul li,
          .content-detail ol li {
            text-align: left;
            display: list-item;
          }
          .content-detail h2 {
            font-size: 22px;
            margin-bottom: 10px;
          }
          .content-detail p,
          .content-detail div,
          .content-detail img {
            margin: 5px 0 15px 0;
          }
          .content-detail img {
            margin: 5px 0;
          }
          .content-detail table {
            width: 100%;
            background-color: #fffdf6;
            border-collapse: collapse;
            margin: 20px auto;
          }
          .content-detail table tr {
            border: 1px solid #000;
            color: #000;
            background: #e2e2e2;
          }
          .content-detail table tr:nth-child(2n+1) {
            background: #fff;
          }
          .content-detail table tr:first-child {
            background: #2F7682;
            color: #fff;
            font-weight: bold;
          }
          .content-detail table tr td {
            margin: 0;
            padding: 5px 10px;
            border: 1px solid #000;
            vertical-align: middle;
          }
          .content-detail table tr td ul {
            width: 100%;
          }
          .content-detail table tr td ul li {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            text-indent: 10px;
          }
          .content-detail table tr p {
            width: 100%;
            padding: 5px 0;
            margin: 0;
          }
          .content-detail iframe {
            max-width: 100%;
            width: 100% !important;
          }

          .pagination {
            margin-top: 40px;
            text-align: center;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .pagination li span,
          .pagination li a {
            width: 34px;
            height: 34px;
            padding: 4px 12px;
            color: #333;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
          }
          .pagination li:hover a,
          .pagination li:hover span {
            background: #EAF1F3;
          }
          .pagination li.active span {
            color: #fff;
            background: #2F7682;
          }
          .pagination li.disabled a,
          .pagination li.disabled span {
            background: transparent;
          }
          .pagination li:first-child span,
          .pagination li:first-child a, .pagination li:last-child span,
          .pagination li:last-child a {
            width: auto;
          }
          .pagination .limit {
            margin: 10px auto;
          }
          .pagination .limit select {
            border-radius: 3px;
            min-width: 50px;
          }

          footer .footer {
            position: relative;
            margin-top: 80px;
          }
          footer .footer-main {
            padding: 40px 0;
            border-top: 1px solid #e9e9e9;
            background: #fff;
          }
          footer .footer-main__logo {
            display: block;
            margin-bottom: 20px;
          }
          footer .footer-main__logo--img {
            display: block;
            width: fit-content;
          }
          footer .footer-main__logo img {
            width: 250px;
          }
          footer .footer-main__title {
            color: #4c4c4c;
            margin-bottom: 12px;
          }
          footer .footer-main__form--label {
            position: relative;
            width: 100%;
          }
          footer .footer-main__form--submit {
            position: absolute;
            top: 4px;
            right: 4px;
            width: 48px;
            height: 48px;
            background: #fff;
            border: none;
            border-radius: 100%;
            background: #2F7682;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer .footer-main__form--submit i {
            color: #fff;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer .footer-main__form--submit i::before {
            font-size: 24px;
          }
          footer .footer-main__form--submit:hover {
            background: #55C8BD;
          }
          footer .footer-main__form input {
            height: 56px;
            padding: 4px 52px 4px 20px;
            border: 1px solid #4c4c4c;
            border-radius: 50px;
            background: #fff;
          }
          footer .footer-main__form input::placeholder {
            color: #a5a5a5;
          }
          footer .footer-main__nav--title {
            color: #2F7682;
            font-size: 20px;
            font-weight: 700;
            font-family: "Barlow Condensed", sans-serif;
            margin-bottom: 20px;
          }
          footer .footer-main__nav--list .item {
            margin-bottom: 6px;
          }
          footer .footer-main__nav--list .item:last-child {
            margin-bottom: 0;
          }
          footer .footer-main__nav--list .item-link {
            display: flex;
            align-items: center;
            width: fit-content;
            color: #1F1F1F;
            line-height: 1.6;
          }
          footer .footer-main__nav--list .item-link__icon {
            padding-right: 8px;
          }
          footer .footer-main__nav--list .item-link__icon img {
            width: 18px;
            height: 18px;
            object-fit: contain;
            filter: grayscale(100%);
          }
          footer .footer-main__nav--list .item-link:hover {
            text-decoration: underline;
          }
          footer .footer-main__nav--list .item-link:hover .item-link__icon img {
            filter: none;
          }
          footer .footer-bottom {
            padding: 12px 0;
            background: #eaf1f3;
          }
          footer .footer-bottom__frame {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }
          footer .footer-bottom__frame--item {
            color: #2F7682;
          }
          footer .footer-bottom__frame a:hover {
            color: #2F7682;
            text-decoration: underline;
          }
          footer .footer-bg {
            position: absolute;
            left: 0;
            bottom: 100%;
            z-index: -1;
          }
          footer .footer-bg img {
            width: 100%;
          }

          @media screen and (max-width: 1300px) {
            .house-flex {
              flex-direction: column-reverse;
              gap: 40px;
            }
            .house-page .house-list {
              width: 100%;
            }
            .house-page .house-sidebar {
              z-index: 1;
              position: fixed;
              left: 0;
              transform: translateX(-100%);
              top: 68px;
              height: 100%;
              max-height: calc(100vh - 68px);
              max-width: 500px;
              background: #fff;
              width: 100%;
              padding: 20px;
              box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.1);
              -webkit-transition: all 0.3s ease;
              -moz-transition: all 0.3s ease;
              -o-transition: all 0.3s ease;
              transition: all 0.3s ease;
            }
            .house-page .house-sidebar__header {
              margin-bottom: 20px;
            }
            .house-page .house-sidebar__wrap {
              padding-right: 10px;
              margin-right: -10px;
              overflow-y: auto;
              height: 100%;
              max-height: calc(100% - 54px);
            }
            .house-page .house-sidebar.active {
              transform: translateX(0);
            }
            .house-page .house-sidebar .close-sidebar {
              display: block;
            }
            .house-sidebar.scroll {
              height: auto;
              overflow-y: unset;
            }
            .house-sidebar__header .btn-map {
              display: none;
            }
            .house-sidebar__header .btn-block {
              display: none;
            }
            .button-filter {
              display: flex;
            }
          }
          @media screen and (max-width: 1023px) {
            .main-body {
              padding-top: 80px;
            }
            header .header {
              display: none;
            }
            header .header-mobile {
              display: block;
            }
            .box-search {
              padding: 0 0 56px;
            }
            .box-search__frame--main {
              text-align: center;
            }
            .box-search__frame--list {
              display: none;
            }
            .box-news__update .item-frame__banner img {
              aspect-ratio: 16/9;
              position: relative;
              display: block;
            }
            .box-about__frame .row {
              flex-direction: column-reverse;
            }
            .box-about__frame--main {
              padding: 0;
            }
            .box-news__update .item-frame__content {
              padding: 10px 20px 0;
            }
            footer .footer {
              margin-top: 56px;
            }
            footer .footer-main__nav {
              padding-top: 28px;
            }
            footer .footer-main__nav--title {
              margin-bottom: 12px;
            }
            .box-testimonial .item {
              height: 100%;
            }
            .house-list .item-thumb__slider > button {
              display: block !important;
            }
            .house-detail__info {
              padding-top: 20px;
            }
            .house-detail__features {
              width: 100%;
              justify-content: space-around;
            }
            .house-detail__action {
              flex-wrap: wrap;
            }
            .house-detail__action a {
              width: 100%;
            }
            .house-detail__info--frame {
              padding: 0;
            }
            .box-house__relative .row {
              gap: 20px 0;
            }
            .house-desc {
              margin-bottom: 32px;
            }
            .house-booking__form {
              padding: 32px 0 0;
              gap: 32px;
            }
            .house-booking__questions .form-flex {
              flex-wrap: wrap;
            }
            .house-booking__questions .form-flex .form-group {
              width: 100%;
            }
            .house-booking__questions .form {
              gap: 20px;
            }
            .house-booking__questions .form .box-label {
              margin-bottom: 12px;
            }
            .house-rental__frame--form .process-list__wrap {
              gap: 12px;
              justify-content: space-around;
            }
            .house-rental__frame--form .process-list__item--label {
              display: none;
            }
            .house-rental__frame--form .process-list {
              margin: 32px 0;
            }
            .form-flex {
              flex-wrap: wrap;
            }
            .form-flex .form-group {
              width: 100%;
            }
            .house-rental__frame--form .process-container__item--flex {
              gap: 32px;
            }
            .house-rental__frame--form .process-container__form--emplyment {
              margin: 32px 0;
            }
            .box-label {
              margin-bottom: 12px;
            }
            .contact-info {
              padding: 12px;
              border-radius: 8px;
            }
            .box-news__featured--nav {
              margin-top: 20px;
            }
            .box-news__latest,
            .pagination {
              margin-top: 32px;
            }
            .pagination {
              justify-content: center;
            }
            .news-detail__sidebar {
              margin-top: 20px;
            }
            .page-error .container-wrapper .content h1 {
              font-size: 60px;
            }
            .house-booking__form--datetime .row {
              gap: 20px;
            }
            .house-booking__time--nav {
              position: relative;
              max-height: 400px;
            }
            .house-rental__program {
              margin-top: 20px;
            }
            .house-page .house-sidebar {
              top: 60px;
              max-height: calc(100vh - 60px);
            }
          }
          @media screen and (max-width: 739px) {
            .footer-main__nav .row {
              gap: 28px;
            }
            .pagination {
              justify-content: center;
            }
            .house-sidebar__frame {
              gap: 20px;
            }
            .select2-container .select2-selection--single {
              height: 50px;
              padding: 12px;
            }
            input,
            textarea {
              padding: 12px 44px 12px 20px;
              height: 50px;
            }
            .house-detail__wrap--main {
              gap: 20px;
            }
            .house-detail__content {
              padding: 20px 0;
            }
            .house-nav__wrap {
              margin-top: 12px;
            }
          }
          @media screen and (max-width: 576px) {
            body {
              font-size: 14px;
            }
            .form-flex {
              flex-wrap: wrap;
            }
            .form .form-group {
              width: 100%;
            }
            .house-detail__price--number {
              font-size: 38px;
            }
            .box-heading {
              font-size: 32px;
            }
            .box-title {
              font-size: 20px;
            }
            .box-testimonial .item-title {
              font-size: 18px;
            }
            .house-detail__title {
              font-size: 26px;
            }
            .box-search__frame--form {
              padding: 20px;
              border-radius: 10px;
            }
            .box-search__frame input {
              padding: 12px;
            }
            .select2-container .select2-selection--single {
              height: 50px;
              padding: 12px;
            }
            .house-booking__questions .form .box-label {
              font-size: 18px;
            }
            .box-news__update .item-frame__content {
              padding: 10px 0 0;
            }
            .box-about__content {
              padding: 20px;
            }
            .box-about__frame--banner img {
              aspect-ratio: 1/1;
            }
            footer .footer-main__form input {
              height: 50px;
            }
            footer .footer-main__form--submit {
              width: 42px;
              height: 42px;
            }
            footer .footer-bottom__frame {
              font-size: 12px;
              flex-direction: column;
              gap: 4px;
            }
            .house-list .item-content__price--number {
              font-size: 30px;
            }
            .house-list .item-content__action a {
              width: 100%;
            }
            .house-list .item-content__link {
              font-size: 20px;
            }
            .house-list .item-content__price--deposit {
              font-size: 14px;
            }
            .house-list .item-tag {
              padding: 8px 10px;
            }
            input[type=checkbox] + label {
              font-size: 14px;
            }
            .house-sidebar__field--item {
              width: 100%;
            }
            .button.button-big .button-label {
              font-size: 18px;
              padding: 16px;
            }
            .button.button-big.button-secondary .button-label,
            .button.button-big.button-secondary .button-icon {
              font-size: 18px;
              padding: 14px;
            }
            .section-frame {
              padding: 12px;
              border-radius: 8px;
            }
            .house-booking__date {
              padding: 0;
            }
            .ui-widget.ui-widget-content {
              padding: 0 10px 20px;
            }
            .ui-datepicker td .ui-state-default {
              font-size: 14px;
            }
            .house-booking__time--nav {
              gap: 12px;
            }
            .house-booking__time--nav .item-time {
              padding: 10px;
              width: calc((100% - 24px) / 3);
            }
            .house-employment__item {
              width: 100%;
            }
            .house-subtitle {
              font-size: 18px;
            }
            input::placeholder,
            textarea::placeholder {
              font-size: 16px;
            }
            .house-rental__frame--form .process-list__item--index {
              width: 32px;
              height: 32px;
              font-size: 20px;
            }
            .house-nav__item {
              font-size: 16px;
            }
            .house-rental__frame--form .process-container__form--emplyment {
              margin: 32px 0;
            }
            .news-page__detail .box-heading {
              font-size: 28px;
            }
            .house-detail__content--action {
              margin-top: 12px;
            }
            .box-search__frame--main .box-heading {
              font-size: 32px;
            }
            .box-header {
              margin-bottom: 20px;
            }
            .house-detail__features {
              gap: 12px;
            }
            .house-detail__features--icon {
              width: 20px;
              height: 20px;
            }
            .house-detail__features--icon i {
              font-size: 18px;
            }
            .house-detail .box-title {
              font-size: 18px;
            }
            .house-nav__item {
              font-size: 14px;
            }
            .house-nav__item p {
              width: calc(100% - 28px);
            }
            .house-nav__icon {
              width: 20px;
              height: 20px;
            }
            .house-nav__icon i {
              font-size: 18px;
            }
            .house-rental__frame--form .process-action {
              margin-top: 32px;
            }
            .house-rental__frame--form .process-action a {
              width: 100%;
            }
            .house-info__cont--title {
              margin-top: 20px;
            }
            .house-booking__action a {
              width: 100%;
            }
            .box-label,
            .contact-info__item {
              font-size: 18px;
            }
            .box-label.small {
              font-size: 16px;
            }
            input[type=radio] + label {
              font-size: 14px;
            }
            .house-list .item-content {
              padding: 12px;
            }
            .house-list .item-frame {
              border-radius: 4px;
            }
            .house-result__frame h3 {
              font-size: 20px;
              margin-bottom: 8px;
            }
            .house-page .house-sidebar {
              padding: 20px 10px;
            }
            .house-detail__features {
              padding: 12px;
            }
            .house-detail__features--item {
              font-size: 16px;
            }
            .house-list .item-content__video, .house-list .item-content__link {
              margin-bottom: 12px;
            }
            .house-list .item-frame .video__link {
              gap: 8px;
            }
            .house-list .item-frame .video__thumb img {
              width: 60px;
            }
            .house-list .item-frame .video__wrap {
              width: calc(100% - 68px);
            }
            .house-list .item-frame .video__title {
              font-size: 12px;
            }
            .house-list .item-frame .video__action {
              font-size: 10px;
            }
          }
      
        `}
      </style>
      <div className="page home">
        <div className="page-bg">
          <img
            // src="images/bg_item_1.svg"
            src={bg_item1}
            alt="LuxOasis"
            loading="lazy"
          />
        </div>

        <header className="home">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col l-12 mc-12 c-12">
                  <div className="header-frame">
                    <a href="/" className="header-frame__logo">
                      <div className="header-frame__logo--img">
                        <img
                          // src="/images/logo.svg"
                          src={logoImage}
                          alt="Logo"
                          loading="lazy"
                        />
                      </div>
                      <div className="header-frame__logo--title">
                        <h1>
                          Lux<span className="highlight">Oasis</span>
                        </h1>
                      </div>
                    </a>
                    <div className="header-frame__menu">
                      <div className="header-frame__menu--main">
                        <ul className="menunav">
                          <li className="">
                            <a href="">Rental Listings</a>
                          </li>
                          <li className="">
                            <a href="">Tenant Portal</a>
                          </li>
                          <li className="">
                            <a href="http://localhost:3000/landlord/dashboard">
                              List your Oasis
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`header-frame__menu--action  ${
                          isMenuOpen ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={toggleMenu}
                          className="toggle-dropdown__menu"
                          aria-label="Toogle"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="currentColor"
                          >
                            <path
                              d="M0.714286 3.30612H19.2857C19.6802 3.30612 20 2.97721 20 2.57143V0.734693C20 0.328913 19.6802 0 19.2857 0H0.714286C0.319777 0 0 0.328913 0 0.734693V2.57143C0 2.97721 0.319777 3.30612 0.714286 3.30612ZM4.71429 10.6531H19.2857C19.6802 10.6531 20 10.3241 20 9.91836V8.08163C20 7.67585 19.6802 7.34693 19.2857 7.34693H4.71429C4.31978 7.34693 4 7.67585 4 8.08163V9.91836C4 10.3241 4.31978 10.6531 4.71429 10.6531ZM0.714286 18H19.2857C19.6802 18 20 17.6711 20 17.2653V15.4286C20 15.0228 19.6802 14.6939 19.2857 14.6939H0.714286C0.319777 14.6939 0 15.0228 0 15.4286V17.2653C0 17.6711 0.319777 18 0.714286 18Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                        <div className="popup-dropdown__menu">
                          <div className="popup-dropdown__menu--frame">
                            <ul className="menu-dropdown">
                              <li className="menu-dropdown__item">
                                <a
                                  href="profile"
                                  className="menu-dropdown__item--link"
                                >
                                  Profile
                                </a>
                              </li>

                              <li className="menu-dropdown__item">
                                <a
                                  href={PATH.PRICE_PLAN}
                                  className="menu-dropdown__item--link"
                                >
                                  Current plan
                                </a>
                              </li>

                              <li className="menu-dropdown__item">
                                <a
                                  href="news"
                                  className="menu-dropdown__item--link"
                                >
                                  News
                                </a>
                              </li>

                              <li className="menu-dropdown__item">
                                <a
                                  href="contact-us"
                                  className="menu-dropdown__item--link"
                                >
                                  Contact Us
                                </a>
                              </li>
                              <li className="menu-dropdown__item">
                                <button onClick={handleLogout}>
                                  <a
                                    href="/"
                                    className="menu-dropdown__item--link"
                                  >
                                    Logout
                                  </a>
                                </button>
                              </li>
                            </ul>
                            <div className="menu-contact contact-info">
                              <div className="contact-info__item">
                                <a
                                  href="tel:18255223105"
                                  className="contact-info__item--link"
                                >
                                  <div className="contact-info__item--icon">
                                    <i className="fa-solid fa-phone"></i>
                                  </div>
                                  <div className="contact-info__item--link">
                                    +1-825-522-3105
                                  </div>
                                </a>
                              </div>
                              <div className="contact-info__item">
                                <a
                                  href="/cdn-cgi/l/email-protection#5b372e23343a28322837322d32353c1b3c363a323775383436"
                                  className="contact-info__item--link"
                                >
                                  <div className="contact-info__item--icon">
                                    <i className="fa-solid fa-envelope"></i>
                                  </div>
                                  <div className="contact-info__item--title">
                                    <span
                                      className="__cf_email__"
                                      data-cfemail="6408111c0b05170d17080d120d0a03240309050d084a070b09"
                                    >
                                      [email protected]
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-mobile">
            <div className="rd-panel">
              <div className="header-mobile__logo">
                <a href="" className="header-mobile__logo--link">
                  <div className="header-mobile__logo--img">
                    <img
                      // src="images/logo.svg"
                      src={logoImage}
                      loading="lazy"
                    />
                  </div>
                  <h1 className="header-mobile__logo--title">
                    Lux<span className="highlight">Oasis</span>
                  </h1>
                </a>
              </div>
              <div className="header-mobile__toggle">
                <button className="toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="currentColor"
                  >
                    <path
                      d="M0.714286 3.30612H19.2857C19.6802 3.30612 20 2.97721 20 2.57143V0.734693C20 0.328913 19.6802 0 19.2857 0H0.714286C0.319777 0 0 0.328913 0 0.734693V2.57143C0 2.97721 0.319777 3.30612 0.714286 3.30612ZM4.71429 10.6531H19.2857C19.6802 10.6531 20 10.3241 20 9.91836V8.08163C20 7.67585 19.6802 7.34693 19.2857 7.34693H4.71429C4.31978 7.34693 4 7.67585 4 8.08163V9.91836C4 10.3241 4.31978 10.6531 4.71429 10.6531ZM0.714286 18H19.2857C19.6802 18 20 17.6711 20 17.2653V15.4286C20 15.0228 19.6802 14.6939 19.2857 14.6939H0.714286C0.319777 14.6939 0 15.0228 0 15.4286V17.2653C0 17.6711 0.319777 18 0.714286 18Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="rd-menu">
              <ul className="rd-menu__nav">
                <li className="rd-menu__item">
                  <a href="property-listings">Property Listings</a>
                </li>
                <li className="rd-menu__item">
                  <a href="rental">Rental Application</a>
                </li>
                <li className="rd-menu__item">
                  <a href="booking">Book A Viewing</a>
                </li>

                <li className="rd-menu__item">
                  <a href="news">News</a>
                </li>
                <li className="rd-menu__item">
                  <a href="contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="popup popup-success main">
          <div className="popup-frame">
            <div className="popup-close">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="popup-frame__inner">
              <div className="popup-frame__inner--image">
                <img
                  // src="images/img_yes.png"
                  src={img_yes}
                  alt="Success"
                />
              </div>
              <div className="popup-frame__inner--content">
                <p>
                  Thank you for reaching out! We will get back to you within 2-3
                  business days!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="popup popup-success newsletter">
          <div className="popup-frame">
            <div className="popup-close">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="popup-frame__inner">
              <div className="popup-frame__inner--image">
                <img
                  // src="images/img_yes.png"
                  src={img_yes}
                  alt="Success"
                />
              </div>
              <div className="popup-frame__inner--content">
                <p>
                  Thank you for signing up for the LuxOasis newsletter! We will
                  be in touch with exciting updates and announcements. Stay
                  tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-body">
          <div className="box-search">
            <div className="container">
              <div className="box-search__frame">
                <div className="row">
                  <div className="col l-6 mc-12 c-12">
                    <div className="box-search__frame--main">
                      <div className="box-header">
                        <h2 className="box-heading">
                          Experience Luxury{" "}
                          <span className="highlight">Living</span>
                        </h2>
                        <div className="box-desc">
                          Without breaking the bank
                        </div>
                      </div>
                      <div className="box-search__frame--list">
                        <div className="item">
                          <div className="item-icon">
                            <img
                              // src="images/img_trusted.png"
                              src={img_trusted}
                              alt="<p>Trusted</p>
"
                              loading="lazy"
                            />
                          </div>
                          <div className="item-title">
                            <p>Trusted</p>
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-icon">
                            <img
                              // src="images/img_professional.png"
                              src={img_professional}
                              alt="<p>Professional</p>
"
                              loading="lazy"
                            />
                          </div>
                          <div className="item-title">
                            <p>Professional</p>
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-icon">
                            <img
                              // src="images/img_cheap.png"
                              src={img_cheap}
                              alt="<p>Affordable</p>
"
                              loading="lazy"
                            />
                          </div>
                          <div className="item-title">
                            <p>Affordable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l-6 mc-12 c-12">
                    <div className="box-search__frame--form">
                      <div className="search-form">
                        <div className="form">
                          <div className="form-group">
                            <select
                              id="location_select"
                              name="locationSelect"
                              className="isSelect2"
                              data-placeholder="Choose Location"
                            >
                              <option value="" selected={true}></option>
                              <option value="binh-phuoc">
                                Edmonton Metropolitan Areas
                              </option>
                              <optgroup>
                                <option value="south-edmonton">
                                  South Edmonton
                                </option>
                                <option value="west-edmonton">
                                  West Edmonton
                                </option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-flex">
                            <div className="form-group">
                              <div className="form-group__content">
                                <input
                                  id="qnt-bedroom"
                                  name="qntBedroom"
                                  type="number"
                                  min="0"
                                  // oninput="this.value=(parseInt(this.value)||'')"
                                  onInput={(e) => {
                                    e.currentTarget.value =
                                      parseInt(e.currentTarget.value) + "" ||
                                      "";
                                  }}
                                  placeholder="Number of Bedrooms"
                                  title="Number of Bedrooms"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="form-group__content">
                                <input
                                  id="qnt-bathroom"
                                  name="qntBathroom"
                                  type="number"
                                  min="0"
                                  // oninput="this.value=(parseInt(this.value)||'')"
                                  onInput={(e) => {
                                    e.currentTarget.value =
                                      parseInt(e.currentTarget.value) + "" ||
                                      "";
                                  }}
                                  placeholder="Number of Bathrooms"
                                  title="Number of Bathrooms"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <select
                              id="price-select"
                              name="priceSelect"
                              className="isSelect2"
                              data-placeholder="Budget"
                            >
                              <option value="" selected={true}></option>
                              <option value="0">All Price</option>
                              <option value="1" data-min="0" data-max="1200">
                                Under $1200
                              </option>
                              <option value="1" data-min="0" data-max="2000">
                                $1201 - $2000
                              </option>
                              <option value="1" data-min="0" data-max="2500">
                                $2001 - $2500
                              </option>
                              <option value="1" data-min="0" data-max="3000">
                                $2501 - $3000
                              </option>
                              <option value="1" data-min="0" data-max="10000">
                                Over $3000
                              </option>
                            </select>
                          </div>
                          <div className="form-action">
                            <a
                              id="button-search"
                              href=""
                              className="button button-cta button-flex btn-big"
                            >
                              <span className="button-label">Find</span>
                              <div className="button-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section box box-house__featured">
            <div className="container">
              <div className="box-house__featured--frame house-list">
                <div className="row gap-y-20">
                  <div className="col l-4 mc-6 c-12">
                    <div className="item">
                      <div className="item-frame">
                        <div className="item-thumb">
                          <div className="item-thumb__slider">
                            <div className="item-thumb__slider--subitem">
                              <a
                                href="apartment-unit/garden-suite-orchards"
                                className="item-thumb__slider--link"
                              >
                                <img
                                  // src="images/GardenSuiteKitchen5.jpeg"
                                  src={GardenSuiteKitchen5}
                                  alt="Executive Air-conditioned One-bedroom Garden Suite @ Orchards"
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="item-thumb__slider--subitem">
                              <a
                                href="apartment-unit/garden-suite-orchards"
                                className="item-thumb__slider--link"
                              >
                                <img
                                  // src="images/GardenSuiteKitchen4.jpeg"
                                  src={GardenSuiteKitchen4}
                                  alt="Executive Air-conditioned One-bedroom Garden Suite @ Orchards"
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="item-thumb__slider--subitem">
                              <a
                                href="apartment-unit/garden-suite-orchards"
                                className="item-thumb__slider--link"
                              >
                                <img
                                  // src="images/GardenSuiteKitchen6.jpeg"
                                  src={GardenSuiteKitchen6}
                                  alt="Executive Air-conditioned One-bedroom Garden Suite @ Orchards"
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="item-thumb__slider--subitem">
                              <a
                                href="apartment-unit/garden-suite-orchards"
                                className="item-thumb__slider--link"
                              >
                                <img
                                  // src="images/GardenSuiteKitchen1.jpeg"
                                  src={GardenSuiteKitchen1}
                                  alt="Executive Air-conditioned One-bedroom Garden Suite @ Orchards"
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="item-thumb__slider--subitem">
                              <a
                                href="apartment-unit/garden-suite-orchards"
                                className="item-thumb__slider--link"
                              >
                                <img
                                  // src="images/GardenSuiteLivingroom3.jpeg"
                                  src={GardenSuiteLivingroom3}
                                  alt="Executive Air-conditioned One-bedroom Garden Suite @ Orchards"
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="item-tag avai">Available</div>
                        </div>
                        <div className="item-content">
                          <div className="item-content__frame">
                            <div className="item-content__video">
                              <div className="video">
                                <input
                                  type="text"
                                  className="videoUri"
                                  value="https://youtu.be/jLVR1WzGsb8"
                                  data-id=""
                                  hidden={true}
                                />
                                <a
                                  href="https://youtu.be/jLVR1WzGsb8"
                                  className="video__link"
                                  data-fancybox="videoReview_32"
                                >
                                  <div className="video__thumb">
                                    <img
                                      alt="Executive Air-conditioned One-bedroom Garden Suite @ Orchards"
                                      loading="lazy"
                                    />
                                    <div className="video__icon">
                                      <i className="fa-solid fa-play"></i>
                                    </div>
                                  </div>
                                  <div className="video__wrap">
                                    <p className="video__action">
                                      Virtual Tour
                                    </p>
                                    <h3 className="video__title"></h3>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <h3
                              className="item-content__title"
                              title="Executive Air-conditioned One-bedroom Garden Suite @ Orchards"
                            >
                              <a
                                href="apartment-unit/garden-suite-orchards"
                                className="item-content__link"
                              >
                                Executive Air-conditioned One-bedroom Garden
                                Suite @ Orchards
                              </a>
                            </h3>
                            <div className="item-content__info">
                              <div className="item-content__info--subitem">
                                <div className="item-content__info--icon">
                                  <i className="fa-solid fa-house"></i>
                                </div>
                                <a
                                  href="apartment-unit"
                                  className="item-content__type"
                                >
                                  Apartment & Unit
                                </a>
                              </div>
                              <div className="item-content__info--subitem">
                                <div className="item-content__info--icon">
                                  <i className="fa-solid fa-location-dot"></i>
                                </div>
                                Plum Lane SW Edmonton
                              </div>
                            </div>
                            <div className="item-content__detail">
                              <div className="item-content__detail--list">
                                <div
                                  className="item-content__detail--subitem hint--top hint--rounded"
                                  aria-label="Bedroom"
                                >
                                  <div className="dots"></div>
                                  <p>
                                    1<span> bd</span>
                                  </p>
                                </div>
                                <div
                                  className="item-content__detail--subitem hint--top hint--rounded"
                                  aria-label="Foot"
                                >
                                  <div className="dots"></div>
                                  <p>
                                    600
                                    <span>
                                      {" "}
                                      ft<sup>2</sup>
                                    </span>
                                  </p>
                                </div>
                                <p></p>
                              </div>
                              <div className="item-content__detail--list">
                                <div
                                  className="item-content__detail--subitem hint--top hint--rounded"
                                  aria-label="Bathroom"
                                >
                                  <div className="dots"></div>
                                  <p>
                                    1<span> ba</span>
                                  </p>
                                </div>
                                <div className="item-content__detail--subitem">
                                  <div className="dots"></div>
                                  <p>Pets OK - See description</p>
                                </div>
                              </div>
                            </div>
                            <div className="item-content__price">
                              <div className="item-content__price--deposit">
                                Security deposit: <span>$1500</span>
                              </div>
                              <div className="item-content__price--main">
                                <div className="item-content__price--number">
                                  <span>$</span>1500
                                </div>
                                <div className="item-content__price--month">
                                  /month
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-content__action">
                            <a
                              href="booking/garden-suite-orchards"
                              className="button button-small"
                            >
                              <span className="button-label">
                                Book a viewing
                              </span>
                            </a>
                            <a
                              href="apartment-unit/garden-suite-orchards"
                              className="button button-secondary button-small"
                            >
                              <span className="button-label">Details</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-house__featured--action">
                  <a href="property-listings" className="button button-flex">
                    <span className="button-label">View more</span>
                    <div className="button-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="section box-testimonial">
            <div className="container">
              <div className="box-testimonial__frame">
                <div className="row">
                  <div className="col l-12 mc-12 c-12">
                    <div className="box-header">
                      <h2 className="box-title text-center">
                        What <span className="highlight">our tenants</span> say
                      </h2>
                    </div>
                  </div>
                  <div className="col l-12 mc-12 c-12">
                    <div className="box-testimonial__slider">
                      <div className="item">
                        <div className="item-frame">
                          <h3 className="item-title">Michelle</h3>
                          <div className="item-line"></div>
                          <div className="item-content">100000000 stars!!</div>
                          <div className="item-quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="23"
                              viewBox="0 0 35 23"
                              fill="currentColor"
                            >
                              <path
                                d="M27.9375 8.59375C29.8125 8.59375 31.375 9.3125 32.625 10.75C33.875 12.1875 34.5 13.8125 34.5 15.625C34.5 17.75 33.75 19.4688 32.25 20.7812C30.75 22.0312 29.1562 22.6562 27.4688 22.6562C25.7812 22.6562 24.125 21.9375 22.5 20.5C20.9375 19 20.1562 17.0625 20.1562 14.6875C20.1562 11 21.3438 7.8125 23.7188 5.125C26.0938 2.375 28.5312 0.8125 31.0312 0.4375L31.7812 1.9375C30.3438 2.5 28.6875 3.59375 26.8125 5.21875C25 6.84375 24.0312 8.4375 23.9062 10C25.4688 9.0625 26.8125 8.59375 27.9375 8.59375ZM8.625 8.59375C10.5 8.59375 12.0625 9.3125 13.3125 10.75C14.5625 12.1875 15.1875 13.8125 15.1875 15.625C15.1875 17.75 14.4375 19.4688 12.9375 20.7812C11.4375 22.0312 9.84375 22.6562 8.15625 22.6562C6.53125 22.6562 4.90625 21.9375 3.28125 20.5C1.65625 19 0.84375 17.0625 0.84375 14.6875C0.84375 11 2.03125 7.8125 4.40625 5.125C6.78125 2.375 9.21875 0.8125 11.7188 0.4375L12.4688 1.9375C11.0312 2.5 9.375 3.59375 7.5 5.21875C5.6875 6.84375 4.71875 8.4375 4.59375 10C6.15625 9.0625 7.5 8.59375 8.625 8.59375Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-frame">
                          <h3 className="item-title">Richard</h3>
                          <div className="item-line"></div>
                          <div className="item-content">
                            Rent is competitive for the place we got! Highly
                            recommended!
                          </div>
                          <div className="item-quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="23"
                              viewBox="0 0 35 23"
                              fill="currentColor"
                            >
                              <path
                                d="M27.9375 8.59375C29.8125 8.59375 31.375 9.3125 32.625 10.75C33.875 12.1875 34.5 13.8125 34.5 15.625C34.5 17.75 33.75 19.4688 32.25 20.7812C30.75 22.0312 29.1562 22.6562 27.4688 22.6562C25.7812 22.6562 24.125 21.9375 22.5 20.5C20.9375 19 20.1562 17.0625 20.1562 14.6875C20.1562 11 21.3438 7.8125 23.7188 5.125C26.0938 2.375 28.5312 0.8125 31.0312 0.4375L31.7812 1.9375C30.3438 2.5 28.6875 3.59375 26.8125 5.21875C25 6.84375 24.0312 8.4375 23.9062 10C25.4688 9.0625 26.8125 8.59375 27.9375 8.59375ZM8.625 8.59375C10.5 8.59375 12.0625 9.3125 13.3125 10.75C14.5625 12.1875 15.1875 13.8125 15.1875 15.625C15.1875 17.75 14.4375 19.4688 12.9375 20.7812C11.4375 22.0312 9.84375 22.6562 8.15625 22.6562C6.53125 22.6562 4.90625 21.9375 3.28125 20.5C1.65625 19 0.84375 17.0625 0.84375 14.6875C0.84375 11 2.03125 7.8125 4.40625 5.125C6.78125 2.375 9.21875 0.8125 11.7188 0.4375L12.4688 1.9375C11.0312 2.5 9.375 3.59375 7.5 5.21875C5.6875 6.84375 4.71875 8.4375 4.59375 10C6.15625 9.0625 7.5 8.59375 8.625 8.59375Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-frame">
                          <h3 className="item-title">Jessica</h3>
                          <div className="item-line"></div>
                          <div className="item-content">
                            This house is beautiful and in a prime location!
                            Will be our long-term residence to raise kids in
                            many more years to come!
                          </div>
                          <div className="item-quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="23"
                              viewBox="0 0 35 23"
                              fill="currentColor"
                            >
                              <path
                                d="M27.9375 8.59375C29.8125 8.59375 31.375 9.3125 32.625 10.75C33.875 12.1875 34.5 13.8125 34.5 15.625C34.5 17.75 33.75 19.4688 32.25 20.7812C30.75 22.0312 29.1562 22.6562 27.4688 22.6562C25.7812 22.6562 24.125 21.9375 22.5 20.5C20.9375 19 20.1562 17.0625 20.1562 14.6875C20.1562 11 21.3438 7.8125 23.7188 5.125C26.0938 2.375 28.5312 0.8125 31.0312 0.4375L31.7812 1.9375C30.3438 2.5 28.6875 3.59375 26.8125 5.21875C25 6.84375 24.0312 8.4375 23.9062 10C25.4688 9.0625 26.8125 8.59375 27.9375 8.59375ZM8.625 8.59375C10.5 8.59375 12.0625 9.3125 13.3125 10.75C14.5625 12.1875 15.1875 13.8125 15.1875 15.625C15.1875 17.75 14.4375 19.4688 12.9375 20.7812C11.4375 22.0312 9.84375 22.6562 8.15625 22.6562C6.53125 22.6562 4.90625 21.9375 3.28125 20.5C1.65625 19 0.84375 17.0625 0.84375 14.6875C0.84375 11 2.03125 7.8125 4.40625 5.125C6.78125 2.375 9.21875 0.8125 11.7188 0.4375L12.4688 1.9375C11.0312 2.5 9.375 3.59375 7.5 5.21875C5.6875 6.84375 4.71875 8.4375 4.59375 10C6.15625 9.0625 7.5 8.59375 8.625 8.59375Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-frame">
                          <h3 className="item-title">Hailey</h3>
                          <div className="item-line"></div>
                          <div className="item-content">
                            Thank you for giving me the opportunity to live in
                            such a beautiful house! All repairs and maintenance
                            are always taken care of promptly and I can see you
                            all take so much pride in providing us with a
                            luxurious yet affordable living experience. Super
                            thankful!
                          </div>
                          <div className="item-quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="23"
                              viewBox="0 0 35 23"
                              fill="currentColor"
                            >
                              <path
                                d="M27.9375 8.59375C29.8125 8.59375 31.375 9.3125 32.625 10.75C33.875 12.1875 34.5 13.8125 34.5 15.625C34.5 17.75 33.75 19.4688 32.25 20.7812C30.75 22.0312 29.1562 22.6562 27.4688 22.6562C25.7812 22.6562 24.125 21.9375 22.5 20.5C20.9375 19 20.1562 17.0625 20.1562 14.6875C20.1562 11 21.3438 7.8125 23.7188 5.125C26.0938 2.375 28.5312 0.8125 31.0312 0.4375L31.7812 1.9375C30.3438 2.5 28.6875 3.59375 26.8125 5.21875C25 6.84375 24.0312 8.4375 23.9062 10C25.4688 9.0625 26.8125 8.59375 27.9375 8.59375ZM8.625 8.59375C10.5 8.59375 12.0625 9.3125 13.3125 10.75C14.5625 12.1875 15.1875 13.8125 15.1875 15.625C15.1875 17.75 14.4375 19.4688 12.9375 20.7812C11.4375 22.0312 9.84375 22.6562 8.15625 22.6562C6.53125 22.6562 4.90625 21.9375 3.28125 20.5C1.65625 19 0.84375 17.0625 0.84375 14.6875C0.84375 11 2.03125 7.8125 4.40625 5.125C6.78125 2.375 9.21875 0.8125 11.7188 0.4375L12.4688 1.9375C11.0312 2.5 9.375 3.59375 7.5 5.21875C5.6875 6.84375 4.71875 8.4375 4.59375 10C6.15625 9.0625 7.5 8.59375 8.625 8.59375Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section box box-about">
            <div className="box-about__bg">
              <img
                // src="images/bg_item_3.svg"
                src={bg_item3}
                alt="LuxOasis"
                loading="lazy"
              />
            </div>
            <div className="container">
              <div className="box-about__frame">
                <div className="row no-gutters">
                  <div className="col l-6 mc-12 c-12">
                    <div className="box-about__frame--main">
                      <div className="box-about__content">
                        <div className="box-about__content--title">
                          <h2 className="box-title">
                            Claim the life that you deserve
                          </h2>
                        </div>
                        <div className="box-about__content--main">
                          Whether you are looking for an apartment rental or
                          house rental in Edmonton, we can help ensure your next
                          home is the right one. Join one of our communities to
                          experience the LuxOasis difference today!
                        </div>
                        <div className="box-about__content--action">
                          <a
                            href="property-listings"
                            className="button button-white button-flex"
                          >
                            <span className="button-label">Seach home</span>
                            <div className="button-icon">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l-6 mc-12 c-12">
                    <div className="box-about__frame--banner">
                      <img
                        // src="images/img_about.jpg"
                        src={img_about}
                        alt="Claim the life that you deserve"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section box box-news__update">
            <div className="container">
              <div className="row">
                <div className="col l-12 mc-12 c-12">
                  <div className="box-header">
                    <h2 className="box-title text-center">
                      Living LuxOasis.
                      <span className="highlight">Keep up to date</span>
                    </h2>
                  </div>
                </div>
                <div className="col l-12 mc-12 c-12">
                  <div className="box-news__update--frame">
                    <div className="item">
                      <div className="item-frame">
                        <div className="row">
                          <div className="col l-6 mc-12 c-12">
                            <div className="item-frame__banner">
                              <img
                                // src="images/FAQs.jpg"
                                src={FAQs}
                                alt="Frequently Asked Questions"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="col l-6 mc-12 c-12">
                            <div className="item-frame__content">
                              <h2 className="item-frame__content--title">
                                Frequently Asked Questions
                              </h2>
                              <div className="item-frame__content--main">
                                Got questions about renting a property with us?
                                Our FAQ guide has you covered! From
                                understanding the application process to
                                learning about maintenance requests and rent
                                payments, this article answers all your key
                                concerns. Whether you're a first-time renter or
                                looking for your next home, get the clarity you
                                need to make your rental experience smooth and
                                stress-free.
                              </div>
                              <div className="item-frame__content--action">
                                <a
                                  href="news/frequently-asked-questions"
                                  className="button button-flex"
                                  title="Frequently Asked Questions"
                                >
                                  <span className="button-label">
                                    Read more
                                  </span>
                                  <div className="button-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="item-frame">
                        <div className="row">
                          <div className="col l-6 mc-12 c-12">
                            <div className="item-frame__banner">
                              <img
                                // src="images/rent.png"
                                src={rent}
                                alt="Rent vs Own - How Much could you Save?"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="col l-6 mc-12 c-12">
                            <div className="item-frame__content">
                              <h2 className="item-frame__content--title">
                                Rent vs Own - How Much could you Save?
                              </h2>
                              <div className="item-frame__content--main">
                                Embark on a journey of endless possibilities
                                within LuxOasis's extraordinary apartment and
                                house communities, where renting transcends mere
                                choice to become a lifestyle upgrade. While the
                                age-old dream of homeownership persists, the
                                undeniable advantages of renting cannot be
                                overlooked in today's dynamic world. Join us as
                                we explore three compelling reasons why renting
                                is the gateway to a life brimming with freedom
                                and flexibility—spoiler alert: it's not only a
                                lifestyle upgrade but also a significantly more
                                affordable option than owning a home, supported
                                by compelling statistics!
                              </div>
                              <div className="item-frame__content--action">
                                <a
                                  href="news/rent-own"
                                  className="button button-flex"
                                  title="Rent vs Own - How Much could you Save?"
                                >
                                  <span className="button-label">
                                    Read more
                                  </span>
                                  <div className="button-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="item-frame">
                        <div className="row">
                          <div className="col l-6 mc-12 c-12">
                            <div className="item-frame__banner">
                              <img
                                // src="images/insurance101.png"
                                src={insurance101}
                                alt="Tenants Insurance 101"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="col l-6 mc-12 c-12">
                            <div className="item-frame__content">
                              <h2 className="item-frame__content--title">
                                Tenants Insurance 101
                              </h2>
                              <div className="item-frame__content--main">
                                While living in a rental home, it is important
                                to have up to-date tenant insurance because it
                                protects you, your neighbors, and your community
                                from added stress after an accident or
                                emergency. Tenant insurance is a requirement in
                                all of our communities so that every resident's
                                belongings and keepsakes are covered.
                              </div>
                              <div className="item-frame__content--action">
                                <a
                                  href="news/tenants-insurance-101"
                                  className="button button-flex"
                                  title="Tenants Insurance 101"
                                >
                                  <span className="button-label">
                                    Read more
                                  </span>
                                  <div className="button-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer">
            <div className="footer-main">
              <div className="container">
                <div className="row">
                  <div className="col l-5 mc-12 c-12">
                    <div className="footer-main__frame">
                      <div className="footer-main__logo">
                        <a href="" className="footer-main__logo--img">
                          <img
                            // src="images/logo_ft.png"
                            src={logo_ft}
                            alt="LuxOasis"
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <div className="footer-main__sign">
                        <div className="footer-main__title">
                          Stay in the loop and sign up for the LuxOasis
                          newsletter:
                        </div>
                        <form
                          className="footer-main__form form-newsletter"
                          method="get"
                          action="javascript:void(0)"
                        >
                          <label className="footer-main__form--label">
                            <input
                              name="from_email"
                              type="text"
                              placeholder="Enter your email"
                            />
                            <span className="noti-format">
                              Please enter a valid email format
                            </span>
                            <button
                              type="submit"
                              className="footer-main__form--submit"
                              aria-label="Send"
                              value=""
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </button>
                          </label>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col l-6 l-o-1 mc-12 c-12">
                    <div className="footer-main__nav">
                      <div className="row">
                        <div className="col l-4 mc-4 c-12">
                          <div className="footer-main__nav--frame">
                            <h2 className="footer-main__nav--title">Company</h2>
                            <div className="footer-main__nav--list">
                              <div className="item">
                                <a href="" className="item-link">
                                  Home
                                </a>
                              </div>

                              <div className="item">
                                <a
                                  href="property-listings"
                                  className="item-link"
                                >
                                  Property Listings
                                </a>
                              </div>
                              <div className="item">
                                <a href="booking" className="item-link">
                                  Book a Viewing
                                </a>
                              </div>
                              <div className="item">
                                <a href="rental" className="item-link">
                                  Rental Application
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col l-4 mc-4 c-12">
                          <div className="footer-main__nav--frame">
                            <h2 className="footer-main__nav--title">
                              Documentation
                            </h2>
                            <div className="footer-main__nav--list">
                              <div className="item">
                                <a href="contact-us" className="item-link">
                                  Contact
                                </a>
                              </div>

                              <div className="item">
                                <a href="news" className="item-link">
                                  News
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col l-4 mc-4 c-12">
                          <div className="footer-main__nav--frame">
                            <h2 className="footer-main__nav--title">Social</h2>
                            <div className="footer-main__nav--list">
                              <div className="item">
                                <a
                                  href="https://www.facebook.com/luxoasisliving"
                                  className="item-link"
                                  target="_blank"
                                >
                                  <div className="item-link__icon">
                                    <img
                                      // src="images/img_fb.png"
                                      src={img_fb}
                                      alt="Icon"
                                      loading="lazy"
                                    />
                                  </div>
                                  Facebook
                                </a>
                              </div>
                              <div className="item">
                                <a
                                  href="https://www.instagram.com/luxoasisliving/"
                                  className="item-link"
                                  target="_blank"
                                >
                                  <div className="item-link__icon">
                                    <img
                                      // src="images/img_ig.png"
                                      src={img_ig}
                                      alt="Icon"
                                      loading="lazy"
                                    />
                                  </div>
                                  Instagram
                                </a>
                              </div>
                              <div className="item">
                                <a
                                  href="https://www.youtube.com/@luxoasisliving"
                                  className="item-link"
                                  target="_blank"
                                >
                                  <div className="item-link__icon">
                                    <img
                                      // src="images/img_ytb.png"
                                      src={img_ytb}
                                      alt="Icon"
                                      loading="lazy"
                                    />
                                  </div>
                                  Youtube
                                </a>
                              </div>
                              <div className="item">
                                <a
                                  href="https://twitter.com/lux_oasis"
                                  className="item-link"
                                  target="_blank"
                                >
                                  <div className="item-link__icon">
                                    <img
                                      // src="images/img_tw.png"
                                      src={img_tw}
                                      alt="Icon"
                                      loading="lazy"
                                    />
                                  </div>
                                  X/Twitter
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col l-12 mc-12 c-12">
                    <div className="footer-bottom__frame">
                      <div className="footer-bottom__frame--item">
                        © LuxOasis. Proudly managed by YourHappyBffs.com
                      </div>
                      <a
                        href=""
                        className="footer-bottom__frame--item"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bg">
              <img
                // src="images/bg_item_2.svg"
                src={bg_item2}
                alt="LuxOasis"
                loading="lazy"
              />
            </div>

            {/* <script>
            $(".form-newsletter").submit(function (e) {
              var form = ".form-newsletter";
              var param = new Object();
              param.fromEmail = $(form + ' input[name="from_email"]').val();
              sendNewsletter(form, param);
            });

            function sendNewsletter(form, param) {
              var url = "send-newsletter";
              var email_regex =
                /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
              var focus = "";

              if (!email_regex.test(param.fromEmail) || param.fromEmail == "") {
                $(form + ' input[name="from_email"]').addClass("error");
                if (focus == "") {
                  focus = form + ' input[name="from_email"]';
                }
              } else {
                $(form + ' input[name="from_email"]').removeClass("error");
              }

              if (!email_regex.test(param.fromEmail) && param.fromEmail != "") {
                $(form + " .noti-format").addClass("active");
              } else {
                $(form + " .noti-format").removeClass("active");
              }

              if (focus !== "") {
                $(focus).focus();
                return;
              }

              $(form + " #loading").fadeIn("fast");
              $.post(
                url,
                param,
                function (data) {
                  if (data.status == true) {
                    $(form + " #loading").fadeOut("fast");
                    $(".popup-success.newsletter").addClass("active");
                    setTimeout(function () {
                      $(".popup-success.newsletter").removeClass("active");
                    }, 4000);
                    $(".pop");
                    clearNewsletter(form);
                  } else {
                    $(form + " #loading").fadeOut("fast");
                    $(form + " .notice.error")
                      .slideDown("slow")
                      .delay(3000)
                      .slideUp("slow");
                  }
                },
                "json"
              );
            }

            function clearNewsletter(form = "") {
              $(form + ' input[name="from_email"]').val("");
            }
          </script> */}
          </div>
        </footer>
      </div>

      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-up"></span>
      </div>

      {/* <div id="loading" className="loading__page">
        <div className="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KGPHNL7B"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </div>
  );
};
