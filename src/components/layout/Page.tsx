export const Page = ({children, title}: {children: any, title: string}) => {
  return (
    <main id="main">
      <div className="region">
        <div className="content">
          <h2 className="text--larger">{title}</h2>
          <hr />
          {children}
        </div>
      </div>
    </main>
  );
};
