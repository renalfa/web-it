import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
  Label,
} from "reactstrap";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { firestore, storage } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const InsertTim = () => {
  const router = useRouter();
  const [foto, setFoto] = useState("");

  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [instagram, setInstagram] = useState("");
  const [wa, setWa] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleUpload = () => {
    if (!foto) alert("Please select a file!");
    const fotoRef = ref(storage, `/ppIT/${foto?.name}`);
    const task = uploadBytesResumable(fotoRef, foto);

    task.on(
      "state_changed",
      (snapshot) => snapshot,
      (error) => console.log(error),
      () =>
        getDownloadURL(task.snapshot.ref).then(async (downloadURL) => {
          const colRef = collection(firestore, "tim_it");
          const data = {
            nama,
            jabatan,
            instagram,
            wa,
            linkedin,
            imgurl: downloadURL,
          };

          await addDoc(colRef, data)
            .then(() => {
              setNama("");
              setJabatan("");
              setFoto("");
              setInstagram("");
              setWa("");
              setLinkedin("");
              setIsSuccess(true);
              setMsg("Berhasil menambahkan tim");
              setTimeout(() => {
                setIsSuccess(false);
                setMsg("");
                router.replace("/");
              }, 3000);
            })
            .catch((err) => {
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

  useEffect(() => {}, [foto]);

  return (
    <>
      <section className="section section-lg bg-gradient-default">
        <Container className="pt-lg pb-250">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <i className="ni ni-ruler-pencil text-primary" />
              </div>
              <h2 className="display-3 text-white mt-2">Input Anggota Tim</h2>
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
      <section className="section section-lg pt-0 mt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center mt--300">
            <Col lg="6">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-3 text-center">
                    Siapa yang ingin anda masukan?
                  </h4>
                  <FormGroup>
                    <Label>Silakan input foto</Label>
                    <InputGroup className="input-group-alternative">
                      <Input
                        className="bg-white rounded p-2"
                        type="file"
                        name="file"
                        defaultValue={foto}
                        onChange={(e) => setFoto(e.target.files[0])}
                        accept="image/*"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nama"
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-briefcase" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Jabatan"
                        type="text"
                        value={jabatan}
                        onChange={(e) => setJabatan(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>Sosial Media</Label>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-instagram" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Instagram"
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-whatsapp" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Whatsapp"
                        type="text"
                        value={wa}
                        onChange={(e) => setWa(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-5">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-linkedin" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Linkedin"
                        type="text"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </InputGroup>
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
        <Alert
          className="position-absolute w-25 ml-3"
          isOpen={isSuccess || isError}
          color={isSuccess ? "success" : "error"}
        >
          <strong>{isSuccess ? "Success!" : "Error!"}</strong>
          {msg}
        </Alert>
      </section>
    </>
  );
};

export default InsertTim;
