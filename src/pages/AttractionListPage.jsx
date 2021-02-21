import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AttractionCard from "../components/attraction/AttractionCard";
import GlobalNav from "../components/common/GlobalNav";
import GoToTop from "../components/common/GoToTop";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/common/Footer";
import children from "../assets/children.jpg";
import outdoortree from "../assets/treeBgImg.jpg";
import history from "../assets/pexels-joshua-135018.jpg";
import hiking from "../assets/pexels-vishal-amin-910307.jpg";
import flower from "../assets/pexels-harry-cooke-6194973.jpg";
import hakka from "../assets/pexels-how-far-from-home-6788862.jpg";
import JumbotronImg from "../components/common/Jumbotron";
import axios from "axios";

const AttractionListPage = () => {
  const globalNavData = [
    { id: "0", title: "全部類別", img: flower },
    { id: "1", title: "親子家庭", img: children },
    { id: "2", title: "戶外活動", img: outdoortree },
    { id: "3", title: "人文歷史", img: history },
    { id: "4", title: "登山健行", img: hiking },
    { id: "5", title: "客家風情", img: hakka }
  ];
  const [attractions, setAttractions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const apiKey = "key2eP0CCFbctZSi7";
  const handleSearch = async (selectedvalue) => {
    console.log(selectedvalue);
    // const filtered = selectedCountry.filter((country) => {
    //   return country.tagGroup.includes(selectedvalue);
    // });
    // setAttractions(filtered);
  };
  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json"
      }
    };
    const url = "https://api.airtable.com/v0/appKsIko7cLPAsdsr/attractions ";
    axios
      .get(url, axiosConfig)
      .then((res) => {
        const info = res.data.records;
        //console.log(info);
        setAttractions(info);
        setSelectedCountry(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid>
      <JumbotronImg />
      <Row className="mb-5">
        <Col sm={12} className="pt-3">
          <h3 id="top">景點探索</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-3">
          <nav className="nav">
            {globalNavData.map((data) => {
              return (
                <GlobalNav key={data.id} title={data.title} image={data.img} />
              );
            })}
          </nav>
        </Col>
        <Col sm={12} className="mb-5">
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>
      <Row>
        <ul className="nav">
          {attractions.length > 0 &&
            attractions.map((info) => {
              const infoData = info.fields;
              const { id, name, image, locationTags } = infoData;
              //console.log(name, image);
              // console.log(infoData.locationTags);

              return (
                <AttractionCard
                  key={infoData.id}
                  title={infoData.name}
                  tagGroup={infoData.locationTags}
                />
              );
            })}
        </ul>
      </Row>

      <Row>
        <Col sm={{ span: 3, offset: 9 }} md={{ span: 2, offset: 10 }}>
          <GoToTop />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
export default AttractionListPage;
