import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { auth, firestore, provider } from "../../config/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

export const Login = () => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      const q = query(
        collection(firestore, "adminIT"),
        where("uid", "==", user.uid)
      );
      const docs = await getDocs(q);
      if (docs.docs.length == 0) {
        await addDoc(collection(firestore, "adminIT"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
        router.replace("/");
        localStorage.setItem("login", "true");
      }
      router.replace("/");
      localStorage.setItem("login", "true");
    } catch (error) {
      console.log(error);
      router.replace("/login");
    }
  };
  return (
    <>
      <Head>
        <title>Viapulsa - Divisi IT</title>
        <meta
          name="description"
          content="NextJs UI kit | Free UI kit built with bootstrap"
        />
        <link rel="icon" href="/ico.webp" />
      </Head>
      <main>
        <section className="section section-shaped section-lg h-100vh">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="">
            <Row className="justify-content-center ">
              <Col lg="5">
                <Link href="/" passHref>
                  <Image alt="..." src={require("../../assets/logo.webp")} />
                </Link>
                <Card className="bg-secondary mt-5 shadow">
                  <CardHeader className="bg-white pb-4">
                    <div className="text-muted text-center mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        onClick={() => loginWithGoogle()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <Image
                            alt="..."
                            src={require("../../assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-4">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Login;
