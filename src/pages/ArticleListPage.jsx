import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleUnit from "../components/article/ArticleUnit";
import Footer from "../components/common/Footer";
import GlobalNav from "../components/common/GlobalNav";
import GoToTop from "../components/common/GoToTop";
import SearchBar from "../components/common/SearchBar";
import children from "../assets/children.jpg";
import outdoortree from "../assets/treeBgImg.jpg";
import history from "../assets/pexels-joshua-135018.jpg";
import hiking from "../assets/pexels-vishal-amin-910307.jpg";
import flower from "../assets/pexels-harry-cooke-6194973.jpg";
import hakka from "../assets/pexels-how-far-from-home-6788862.jpg";
import JumbotronImg from "../components/common/Jumbotron";
const ArticleListPage = () => {
  const globalNavData = [
    { id: "0", title: "全部類別", img: flower },
    { id: "1", title: "親子家庭", img: children },
    { id: "2", title: "戶外活動", img: outdoortree },
    { id: "3", title: "人文歷史", img: history },
    { id: "4", title: "登山健行", img: hiking },
    { id: "5", title: "客家風情", img: hakka }
  ];
  const articleData = [
    {
      id: "0",
      image: "https://img.bunnyann.com/uploads/20200819105008_9.jpg",
      title: "絕對秘境！尖石五星級老鷹溪步道",
      link: "https://bunnyann.com/bunnyann400/"
    },
    {
      id: "1",
      image: "https://img.bunnyann.com/uploads/20180416224257_85.jpg",
      title: "尖石青蛙石天空步道",
      link: "https://bunnyann.com/bunnyann400/"
    },
    {
      id: "2",
      image: "https://img.bunnyann.com/uploads/20200805163921_29.jpg",
      title: "龍貓隧道！新豐紅樹林生態保護區",
      link: "https://bunnyann.com/bunnyann400/"
    },
    {
      id: "3",
      image: "https://img.bunnyann.com/uploads/20201206212607_85.jpg",
      title: "放假來遠足！綠世界生態農場踏青",
      link: "https://bunnyann.com/bunnyann400/"
    },
    {
      id: "4",
      image: "https://img.bunnyann.com/uploads/20201004224450_9.jpg",
      title: "擁抱群山新秘境！尖石魔法女屋山丘城堡",
      link: "https://bunnyann.com/bunnyann400/"
    },
    {
      id: "5",
      image: "https://img.bunnyann.com/uploads/20191228210639_28.jpg",
      title: "新竹市立動物園",
      link: "https://bunnyann.com/bunnyann400/"
    }
  ];
  return (
    <Container fluid>
      <JumbotronImg />
      <Row className="mb-5">
        <Col sm={12} className="pt-3">
          <h3 id="top">推薦行程</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-3">
          <ul className="nav justify-content-between">
            {globalNavData.map((data) => {
              return (
                <GlobalNav key={data.id} title={data.title} image={data.img} />
              );
            })}
          </ul>
        </Col>
        <Col sm={12} className="mb-5">
          <SearchBar />
        </Col>
      </Row>
      <Row>
        {articleData.map((data) => {
          return (
            <Col md={4} sm={6} xs={12} key={data.id}>
              <ArticleUnit
                title={data.title}
                image={data.image}
                link={data.link}
              />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col sm={{ span: 3, offset: 9 }} md={{ span: 2, offset: 10 }}>
          <GoToTop />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
export default ArticleListPage;

//更改 <GlobalNav /> css寫法
//美化 <SearchBar />
//調整 ArticleUnit樣式
//套色彩版
