'use client'

import { CustomFlowbiteTheme, Sidebar } from 'flowbite-react';
import { FaFileInvoice, FaWrench, FaLaptop  } from "react-icons/fa";
import {HiHome, HiChartPie, HiTicket, HiShoppingBag, HiShoppingCart, HiSupport, HiTable, HiUser, HiIdentification } from 'react-icons/hi';

export default function Sibebar() {
  return (
    <div className=" relative h-full ">
      <Sidebar aria-label="Sidebar with content separator example" theme={customSideBarTheme}>
      <Sidebar.Logo href="#" img="./favicon.ico" imgAlt="Flowbite logo">
        Cyber Store
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Sidebar.Item href="/" icon={HiHome} theme={customSideBarTheme?.item}>
                Trang chủ
                </Sidebar.Item>
            </Sidebar.ItemGroup>
          <Sidebar.Item href="/salesmanagement" icon={HiShoppingCart}>
            Quản lý mua bán
          </Sidebar.Item>
          <Sidebar.Item href="/productsmanagement" icon={FaLaptop}>
            Quản lý sản phẩm
          </Sidebar.Item>
          <Sidebar.Item href="/repairmanagement" icon={FaWrench}>
            Quản lý sửa chữa
          </Sidebar.Item>
          <Sidebar.Item href="/hrmanagement" icon={HiUser}>
            Quản lý nhân sự
          </Sidebar.Item>
          <Sidebar.Item href="/statistic" icon={HiChartPie}>
            Quản lý doanh thu
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/setting" icon={HiSupport}>
            Cài đặt
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}

const customSideBarTheme: CustomFlowbiteTheme['sidebar'] = {
    "root": {
      "base": "h-full overflow-y-auto overflow-x-hidden static rounded min-h-screen bg-blue-800",
      "collapsed": {
        "on": "w-16",
        "off": "w-64"
      },
      "inner": "h-full overflow-y-auto overflow-x-hidden static rounded min-h-screen bg-blue-800",
    },
    "collapse": {
      "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      "icon": {
        "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        "open": {
          "off": "",
          "on": "text-gray-900"
        }
      },
      "label": {
        "base": "ml-3 flex-1 whitespace-nowrap text-left",
        "icon": {
          "base": "h-6 w-6 transition ease-in-out delay-0",
          "open": {
            "on": "rotate-180",
            "off": ""
          }
        }
      },
      "list": "space-y-2 py-2"
    },
    "cta": {
      "base": "mt-6 rounded-lg p-4  bg-red-500 dark:bg-gray-700",
      "color": {
        "blue": "bg-cyan-50 dark:bg-cyan-900",
        "dark": "bg-dark-50 dark:bg-dark-900",
        "failure": "bg-red-50 dark:bg-red-900",
        "gray": "bg-alternative-50 dark:bg-alternative-900",
        "green": "bg-green-50 dark:bg-green-900",
        "light": "bg-light-50 dark:bg-light-900",
        "red": "bg-red-50 dark:bg-red-900",
        "purple": "bg-purple-50 dark:bg-purple-900",
        "success": "bg-green-50 dark:bg-green-900",
        "yellow": "bg-yellow-50 dark:bg-yellow-900",
        "warning": "bg-yellow-50 dark:bg-yellow-900"
      }
    },
    "item": {
      "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-primary dark:text-white dark:hover:bg-gray-700",
      "active": "bg-gray-100 dark:bg-gray-700",
      "collapsed": {
        "insideCollapse": "group w-full pl-8 transition duration-75",
        "noIcon": "font-bold"
      },
      "content": {
        "base": "px-3 flex-1 whitespace-nowrap"
      },
      "icon": {
        "base": "h-6 w-6 flex-shrink-0 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        "active": "text-gray-700 dark:text-gray-100"
      },
      "label": "",
      "listItem": ""
    },
    "items": {
      "base": ""
    },
    "itemGroup": {
      "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
    },
    "logo": {
      "base": "mb-5 mt-3 flex items-center pl-2.5",
      "collapsed": {
        "on": "hidden",
        "off": "self-center whitespace-nowrap text-xl text-white font-semibold dark:text-white"
      },
      "img": "mr-3 h-6 sm:h-7"
    }
  }