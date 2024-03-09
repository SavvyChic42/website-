import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import { version } from "react";
import schema from "./sanity/schemas";

const config =defineConfig({
    projectId:"z2nd2cx5",
    dataset: "production",
    title:"ecommerce website",
    apiVersion: "2023-11-21",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schema },
    




})
export default config;