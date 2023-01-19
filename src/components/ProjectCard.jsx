export const ProjectCard = ({
  title,
  company,
  location,
  description,
  link,
  tags,
}) => {
  return (
    <div className="border w-[600px] m-2 p-5 px-10">
      <div className="mb-5">
        <h4 className="text-lg">{title}</h4>
        <small>
          @ {company} - {location}
        </small>
      </div>

      <p className="text-justify mb-5">{description}</p>
      <div
        className="flex items-start justify-between flex-col
                      sm:flex-row sm:items-center"
      >
        <a
          href={link}
          target="_blank"
          className="text-white border border-slate-600 p-1 px-5 hover:underline mb-5
                      sm:mb-0"
        >
          Link
        </a>

        <div className="flex [&>*]:mr-2">
          {tags.map((tag, i, tags) => (
            <p className="text-slate-600" id={tag}>
              {tag} {i + 1 === tags.length ? "" : "\u2022"}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
