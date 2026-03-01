'use client';

import { Provider } from "mobx-react";
import { PrimeReactProvider } from "primereact/api";
import store from "./store/store";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        {children}
      </PrimeReactProvider>
    </Provider>
  );
}
