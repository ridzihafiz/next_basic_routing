import styles from "../../../../styles/page.module.css";

export default function Details({ slug, id }) {
  return (
    <div className={styles.container_center}>
      <h1>Detail Blog</h1>
      <p>
        slug: {slug} <br />
        id: {id}
      </p>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // console.log(ctx);
  const { slug, id } = ctx.params;

  return {
    props: {
      slug: slug,
      id: id,
    },
  };
}
