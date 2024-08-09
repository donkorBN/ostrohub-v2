import { Technologies } from "@/constant";
import Image from "next/image";

export default function TechnologySlider() {
	return (
		<>
			<div className="w-full hidden  bg-black md:grid grid-cols-7 gap-3 items-center overflow-x-scroll justify-center">
				{Technologies.map((technology, index) => (
					<div key={index} className="relative h-16">
						<Image
							src={technology.img}
							alt={technology.name}
							fill
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
							className="absolute top-0"
						/>
					</div>
				))}
			</div>
		</>
	);
}
