import Link from "next/link";
import { Form } from "../components/Form";
import { Heads } from "../components/Heads";
import Layout from "../components/Layout";
import { NavItem } from "../components/NavItem";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heads />
    <Form />
  </Layout>
);

export default AboutPage;
