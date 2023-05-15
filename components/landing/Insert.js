import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { firestore, storage } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";

const Insert = () => {
    const router = useRouter();
  const [file, setFile] = useState("");

  const [judul, setJudul] = useState("");
  const [content, setContent] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleUpload = () => {
    if (!file) alert("Please select a file!");
    const fotoRef = ref(storage, `/contentIT/${file?.name}`);
    const task = uploadBytesResumable(fotoRef, file);

    task.on(
      "state_changed",
      (snapshot) => snapshot,
      (error) => console.log(error),
      () =>
        getDownloadURL(task.snapshot.ref).then(async (downloadURL) => {
          const colRef = collection(firestore, "content_it");
          const data = { judul, content, imgurl: downloadURL };

          await addDoc(colRef, data).then(() => {
            setJudul("");
            setContent("");
            setFile("");
            setIsSuccess(true);
            setMsg("Konten berhasil ditambahkan");
            setTimeout(() => {
                setIsSuccess(false);
                setMsg("");
                router.replace("/");
            }, 3000);
          }).catch((err) => {
            setIsError(true);
            setMsg(err.message);
            setTimeout(() => {
                setIsError(false);
                setMsg("");
            }, 3000);
          });
        })
    );
  };

  useEffect(() => {}, [file]);

  return (
    <>
      <section className="section section-lg bg-gradient-default">
        <Container className="pt-lg pb-250">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <i className="ni ni-ruler-pencil text-primary" />
              </div>
              <h2 className="display-3 text-white mt-2">Input Content</h2>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      <section className="section section-lg pt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-1 text-center">
                    Konten apa yang ingin anda masukan?
                  </h4>
                  <p className="mt-0 text-center">
                    Silakan isi form dibawah ini untuk mengirimkan konten yang
                    ingin anda masukan.
                  </p>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-user-run" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Judul Content"
                        type="text"
                        value={judul}
                        onChange={(e) => setJudul(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <Input
                        className="bg-white rounded p-2"
                        type="file"
                        name="file"
                        defaultValue={file}
                        onChange={(e) => setFile(e.target.files[0])}
                        accept="image/*"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      placeholder="Isi Content..."
                      rows="4"
                      type="textarea"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="button"
                      onClick={() => handleUpload()}
                    >
                      Submit
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Alert className="position-absolute w-25 ml-3" isOpen={isSuccess || isError} color={isSuccess ? "success" : "error"}>
          <strong>{isSuccess ? "Success!" : "Error!"}</strong>{msg}
        </Alert>
        {/* <FormGroup>
                    <Input type='file' name='file' onChange={(e) => setFile(e.target.files[0]) } accept="image/*" />
                    <Button onClick={() => handleUpload()}>Submit</Button>
                </FormGroup> */}
      </section>
    </>
  );
};

export default Insert;
