import { ProjectCard } from "../components/ProjectCard";

export default function Projects() {
	return (
		<div className="flex flex-wrap justify-center overflow-y-scroll mx-5 w-screen xl:w-[1232px]">
			<ProjectCard
				title="Online resume builder"
				company="CV Unlimited"
				location="London, UK"
				description="Making of a website and interactive resume builder for a company that offers resume writing services."
				link="https://cv-minute.com"
				tags={["React.js", "Vue.js", "Node.js", "MongoDB"]}
			/>

			<ProjectCard
				title="NFT Collection"
				company="Gods of Asgard"
				location="New York, USA"
				description="Making of a NFT collection and website for a company that offers 'Pay to Earn' NFTs and games."
				link="https://godsofasgardp2e.com"
				tags={["Solidity", "Hardhat", "Node.js", "React.js"]}
			/>

			<ProjectCard
				title="Testimonials WordPress plugin"
				company="Digital Lab Dubai"
				location="Dubai, UAE"
				description="Making of a WordPress plugin that allows the user to add testimonials to their website."
				link="https://www.digitallabdubai.com/"
				tags={["PHP", "WordPress"]}
			/>

			<ProjectCard
				title="Photo album WordPress plugin"
				company="Bokao's"
				location="Avignon, France"
				description="Making of a WordPress plugin that allows the user to add photo albums to their website."
				link="https://bokaos.fr"
				tags={["PHP", "JQuery", "WordPress"]}
			/>
		</div>
	);
}
