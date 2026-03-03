'use client';

import { Provider } from "mobx-react";
import { PrimeReactProvider } from "primereact/api";
import store from "../store/store";
import GlobalLoader from "./LoaderProvider/LoaderProvider";
// import MenubarComponent from "../components/MenubarComponent/MenubarComponent";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import AppConstants from "../utils/AppConstants";
const MenubarComponent = dynamic(
  () => import("../components/MenubarComponent/MenubarComponent"),
  { ssr: false }
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <GlobalLoader />
        <Suspense fallback={<div>{AppConstants.LOADING_TEXT}</div>}>
          <MenubarComponent />
          <div className="common-styling">
            {children}
          </div>
        </Suspense>
      </PrimeReactProvider>
    </Provider>
  );
}
