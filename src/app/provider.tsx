'use client';
import Header from "@/components/layout/header/Header";
import { persistor, store } from "@/store/persistReducer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

function Providers({children}: {children: React.ReactNode}) {
    return ( 
        <ApolloProvider client={client}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Toaster position="top-right" richColors />
                    <Header />
                    {children}
                </PersistGate>
            </Provider>
        </ApolloProvider>
     );
}

export default Providers;