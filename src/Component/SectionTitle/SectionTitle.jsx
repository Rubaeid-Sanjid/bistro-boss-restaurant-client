
const SectionTitle = ({subtitle, title}) => {
    return (
        <div className="md:w-1/4 text-center mx-auto my-12">
            <p className="mb-2 text-yellow-500">---{subtitle}---</p>
            <h2 className="text-4xl border-y-2 py-3">{title}</h2>
        </div>
    );
};

export default SectionTitle;