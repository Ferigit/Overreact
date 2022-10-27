import Link from "next/link";
import moment from "moment";

export interface IPostItem {
  id?: string;
  title: string;
  body: string;
}

interface IProps {
  post: IPostItem;
}

const PostItem = ({ post }: IProps) => {
  const { title, body, id } = post;
  return (
    <article key={id}>
      <header>
        <h3 className="post-card">
          <Link href={`/${title.split(" ").join("-")}/`}>{title}</Link>
        </h3>
        <p className="post-date">
          {moment()
            .subtract(30 - Number(id), "days")
            .format("MMM Do YY") +
            " • ☕️☕️☕️ " +
            moment()
              .subtract(30 - Number(id), "days")
              .startOf("day")
              .fromNow()}
          read
        </p>
      </header>
      <p className="post-card-body">{body}</p>
      <style jsx>{`
        .aside-container {
          display: flex;
          margin-bottom: 3.5rem;
        }
        .post-card {
          margin-bottom: 0.4375rem;
          color: #d23669;
          font-weight: 900;
          margin-bottom: 0px;
          font-size: 2.1rem;
        }
        .post-card-body {
          margin-bottom: 38px;
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
        .post-date {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      `}</style>
    </article>
  );
};

export default PostItem;
