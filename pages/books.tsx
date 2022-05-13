import Head from 'next/head';
import { ReactElement } from 'react';
import styled from 'styled-components';
import ExternalLink from '../components/ExternalLink';
import Tag from '../components/Tag';
import { AllMyBooks } from '../data/Books';
import { themeHeaderColor, themeMain } from '../style/Theme';

const Header = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-size: 3.3em;
  color: ${themeHeaderColor};
  margin-bottom: 50px;
  font-weight: 500;
`;

const Book = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  line-height: 1;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const StyledImage = styled.img`
  max-width: 200px;
`;

const BookInfoContainer = styled.div`
  margin-left: 1em;
`;

const BookYear = styled.h3`
  margin-top: 100px;
  font-size: 2em;
  border-bottom: 1px solid #ccc;
`;

const BookTitle = styled.h3`
  margin: 0;
  padding: 0;
  padding-top: 20px;
  font-size: 1.5em;
`;

const BookSubTitle = styled.p`
  font-size: 1.1em;
  font-style: italic;
  padding-top: 0.7em;
  margin: 0;
`;

const BookDetails = styled.p`
  font-size: 0.9em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 0;
`;

const BookRating = styled.span`
  font-size: 0.9em;
`;

const Books = () => {
  return (
    <>
      <Head>
        <title>My Books</title>
        <meta name="description" content="Fabien Furet / Books" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header>
        <span>My Books</span>
      </Header>
      <section>
        {AllMyBooks.map(({ year, books }) => {
          return (
            <>
              <BookYear key={year}>{year}</BookYear>
              {books.map(
                ({
                  title,
                  image,
                  subtitle,
                  pages,
                  tag,
                  rating,
                  link,
                  author,
                }) => {
                  return (
                    <Book key={title}>
                      <StyledImage src={`/${image}`} alt={title} />
                      <BookInfoContainer>
                        <Tag tag={{ name: tag, level: 5 }} />
                        <BookTitle>
                          <ExternalLink variant="footer" href={link}>
                            {title}
                          </ExternalLink>
                        </BookTitle>
                        <BookSubTitle>{subtitle}</BookSubTitle>
                        <BookDetails>{`${author} - ${year} - ${pages} page`}</BookDetails>
                        <BookRating>Avis {rating}</BookRating>
                        <br />
                        <br />
                      </BookInfoContainer>
                    </Book>
                  );
                }
              )}
            </>
          );
        })}
      </section>
    </>
  );
};

const Root = styled.main`
  ${themeMain};
`;

Books.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Root>{page}</Root>
    </>
  );
};

export default Books;
