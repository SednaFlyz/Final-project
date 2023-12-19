import React from "react";
import {Row,Col} from "react-bootstrap";

import image from "../assets/WebDL1a.png"
import image2 from "../assets/WebDL1b.png"

function WebDL_I() {
  return (
    <div>
      <h1>WebDL1 Experience</h1>
      <p>
        I started WebDL 1 about a year ago. I was new to the world of coding
        scripts and it was an exciting new experience. My teacher introduced me
        to HTML, or Hyper Text Markup Language. I learned how to use tags with
        angular brackets and general basics of coding with HTML. I learned how
        to create formatting on my tags, like bold and italics. After I learned
        how to create a form, ofcourse which did nothing without the
        functionality. I learned how to display data on a table and how to
        change its borders and what not. Later on I learned how to color and
        style my output with inline CSS, and later internal CSS. I used
        functions like background Color, text color, text weight, background
        images and gradients, text offset and lots more. Near the end of Web Dl
        1, I started making my works more functional with the help of basic
        Javascript functions, like arithmetic, getElementById, etc. I learned
        how to make a simple 2 input calculator for the 5 basic functions, +, -,
        *, /, and ^ or exponents. It started to get more complicated but it was
        ok and I got used to it.
      </p>
    <Row>
      <Col><img src={image} /></Col> <Col><img src={image2}/></Col> <Col></Col>
    </Row>
      
    </div>
  );
}
export default WebDL_I;
