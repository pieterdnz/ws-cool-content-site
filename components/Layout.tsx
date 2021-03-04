import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { NavItem } from "./NavItem";

type Props = {
  children?: ReactNode;
  menuItems?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  menuItems,
  title = "This is the default title",
}: Props) => (
  <div className="container mx-auto px-4">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="bg-gray-200 mb-4">
      <nav className="flex flex-wrap items-center justify-between p-4">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <a
            className="text-xl text-indigo-600 font-semibold font-heading"
            href="#"
          >
            Cool content
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
          <NavItem href="/" title="Home" />
          <NavItem href="/about" title="About" />
          <NavItem href="/users" title="users" />
          <NavItem href="/api/users" title=" api" />
        </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <NavItem href="/" title="Link" />
          <NavItem href="/" title="Link" />
          <NavItem href="/" title="Link" />
        </div>
      </nav>
    </header>
    {children}
    <footer className="flex flex-wrap items-center justify-between p-4">
      <div
        className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center"
        data-config-id="copyright"
      >
        © 2020 Dunder Mifflin
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <div className="mx-auto lg:mx-0 lg:ml-auto">
          <a
            className="inline-block mt-0 text-blue-900 hover:text-indigo-600"
            href="#"
            data-config-id="link1"
          >
            Products
          </a>
          <a
            className="inline-block mt-0 ml-8 text-blue-900 hover:text-indigo-600"
            href="#"
            data-config-id="link2"
          >
            Team
          </a>
          <a
            className="inline-block mt-0 ml-8 text-blue-900 hover:text-indigo-600"
            href="#"
            data-config-id="link3"
          >
            Customers
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-4 lg:mt-0 lg:ml-8">
          <a href="#">
            <svg
              className="text-indigo-600 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="text-indigo-600 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
