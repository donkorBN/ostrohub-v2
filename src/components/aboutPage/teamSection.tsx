import MembersCardSlider from "../slider/aboutPage/membersCardSlider";
import Typography from "../typography";

export default function TeamSection() {
	return (
		<>
        <div className="py-4 team">
			<Typography.h3 className="text-center">Team Member</Typography.h3>
			<div>
				<MembersCardSlider />
			</div>
        </div>
		</>
	);
}
