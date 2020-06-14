import styled from 'styled-components';

export const About = styled.div`
  padding: 40px 0 70px 0;
  background: #f6f6f6;
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  padding: 30px 0;
  h2 {
    color: #333;
    margin-bottom: 30px;
  }
`;

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

export const Coll = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 640px) {
    > div {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  @media (min-width: 992px) {
    float: left;
    width: 33.33333333%;
  }
`;

export const ImageAbout = styled.img`
  display: block;
  max-width: 100%;
  margin-top: -90px;
  height: auto;
`;

export const IntroText = styled.div`
  margin: 0;
  padding: 0px;
  width: 80%;
  margin-left: 20%;
  margin-top: -10px;
`;

export const Description = styled.div`
  padding: 0px;
  width: 80%;
  margin-left: 20%;
  margin-top: 10px;
  h4 {
    color: #555;
    margin-top: 20px;
  }

  p {
    color: #777;
  }
`;
