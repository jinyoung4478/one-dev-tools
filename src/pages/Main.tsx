import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Container = styled.div`
   max-width: 128rem;
   margin: 0 auto;
   padding: 0 1rem;
`;

const Main = () => {
   return (
      <>
         <Header />
         <Container>Main</Container>
         <Footer />
      </>
   );
};

export default Main;
