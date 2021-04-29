import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/dist/client/router';
import {
  BookDetailPageContainer,
  BookDetailPageBanner,
  BookDetailPageBannerMask,
  BookDetailPageThumbnail,
  BookDetailPinkCircle,
  BookDetailFullBlackCircle,
  BookDetailEmptyBlackCircle,
  BookDetails,
} from '../../styles/pages/BookDetailPage';
import { withApollo } from '../../utils/withApollo';
import Back from '../../assets/icons/back.svg';
import { ActionBar } from '../../components/ActionBar';
import Book from '../../assets/icons/book-open.svg';
import Headphone from '../../assets/icons/headphones.svg';
import Share from '../../assets/icons/share.svg';
import { useLoadBookQuery } from '../../generated/graphql';

import BookPlaceholder from '../../assets/icons/cover-placeholder.svg';

function BookDetailPage(): JSX.Element {
  const router = useRouter();

  const { bookId } = router.query as { bookId: string };

  const { data } = useLoadBookQuery({
    variables: {
      id: bookId,
    },
  });

  return (
    <BookDetailPageContainer>
      <BookDetailPageBanner>
        <BookDetailPageBannerMask>
          <BookDetailPinkCircle />
          <BookDetailFullBlackCircle />
          <BookDetailEmptyBlackCircle />
          <img
            className="small-circle"
            src="/images/small-circle.png"
            alt="small-circle"
          />
          <img
            className="big-circle"
            src="/images/big-circle.png"
            alt="big-circle"
          />

          <NextLink href="/">
            <Back />
          </NextLink>

          <BookDetailPageThumbnail>
            {data?.book?.cover ? (
              <NextImage
                src={
                  data.book.cover ||
                  'http://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                }
                width={151}
                height={234}
              />
            ) : (
              <BookPlaceholder />
            )}
          </BookDetailPageThumbnail>
        </BookDetailPageBannerMask>
      </BookDetailPageBanner>

      {data?.book && (
        <BookDetails>
          <h1>
            {data.book.title}{' '}
            {data.book.subtitle && <span>{data.book.subtitle}</span>}
          </h1>

          <h2>{data.book.author}</h2>

          <p>{data.book.description}</p>
        </BookDetails>
      )}

      <ActionBar
        buttons={[
          {
            text: 'Read',
            icon: Book,
            selected: true,
          },
          {
            text: 'Listen',
            icon: Headphone,
            selected: false,
          },
          {
            text: 'Share',
            icon: Share,
            selected: false,
          },
        ]}
      />
    </BookDetailPageContainer>
  );
}

export default withApollo({ ssr: false })(BookDetailPage);
