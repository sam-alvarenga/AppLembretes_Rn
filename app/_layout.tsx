import { Stack } from "expo-router";
import React from "react";

// Este arquivo de layout principal para todas as rotas dentro da pasta /app
// Ele define como as telas serão exibidas e organizadas — neste caso, em uma pilha (Stack)

export default function RootLayout() {

    return (
        <Stack screenOptions={{ headerShown: true}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="(home)"/>
        </Stack>
    )

  
}

