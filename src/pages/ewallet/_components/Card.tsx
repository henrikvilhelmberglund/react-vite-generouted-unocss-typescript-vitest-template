import { useDispatch } from 'react-redux';
import { deleteCard, setActiveCard, setAllCardsToInactive } from '../../../redux/ewalletSlice';
import { useOutletContext } from 'react-router-dom';
import { tw } from '../../../lib/helpers/tw';

interface CardProps {
	number: number;
	validThru: string;
	vendor: string;
	ccv: number;
	i: number;
	active: boolean;
	allCards: string;
}

export default function Card({ number, validThru, vendor, ccv, i, active, allCards }: CardProps) {
	const dispatch = useDispatch();
	const { firstName, lastName } = useOutletContext();
	const cardParts: string[] = Array.from({ length: 4 }, (_, index) => number.toString().slice(index * 4, (index + 1) * 4));
	let cardStyle;
	let iconStyle;
	// TODO this seems a bit stupid
	let shouldBeHidden = active && allCards ? '!hidden' : '';
	if (vendor === 'DuckCard') {
		cardStyle = tw`bg-gradient-to-rb flex h-[270px] w-[440px] flex-col justify-between rounded-xl from-green-400 to-green-700 p-4 shadow-md shadow-green-800`;
		iconStyle = 'i-noto-duck bg-white border-white border-2 border-solid rounded-md h-16 w-16';
	} else if (vendor === 'FishCard') {
		cardStyle = 'from-blue-400 to-blue-700 bg-gradient-to-b w-[440px] h-[270px] rounded-xl flex flex-col p-4 justify-between shadow-md shadow-blue-800';
		iconStyle = 'i-noto-fish  h-16 w-16';
	} else if (vendor === 'SvelteCard') {
		cardStyle =
			'to-[#FF3E00] from-orange-500 from-1% to-50% bg-gradient-to-b w-[440px] h-[270px] rounded-xl flex flex-col p-4 justify-between shadow-md shadow-orange-800';
		iconStyle = 'i-devicon-svelte  h-16 w-16';
	}
	return (
		<button
			className="relative"
			onClick={() => {
				if (!active) {
					dispatch(setAllCardsToInactive());
					dispatch(setActiveCard({ i, newState: true }));
				}
			}}>
			<article className={`${cardStyle} ${active === false ? `absolute top-[${i * 40}px] z-${i} left-0` : ''} ${shouldBeHidden} `}>
				<header className="flex h-[40%]  justify-between ">
					<div className="flex flex-col items-center justify-center gap-1">
						<span className="i-lucide-nfc -rotate-90 text-3xl text-black/80"></span>
						<span className="i-flat-color-icons-sim-card-chip?bg text-5xl"></span>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<div className="flex flex-col items-end gap-2">
							<p className={`font-${vendor} text-4xl`}>{vendor}</p>
							<span className={`${iconStyle}`}></span>
						</div>
					</div>
				</header>
				<section className="flex justify-center gap-5  pb-4 text-3xl">
					{cardParts.map((part, i) => (
						<p key={i}>{part}</p>
					))}
				</section>
				<footer className="flex justify-between">
					<div className="flex flex-col">
						<p className="text-xs">CARDHOLDER NAME</p>
						<div className="flex gap-2">
							<p className="font-semibold">{firstName.toUpperCase()}</p>
							<p className="font-semibold">{lastName.toUpperCase()}</p>
						</div>
					</div>
					<div className="flex flex-col">
						<p>VALID THRU</p>
						<p className="self-end pr-1 font-semibold">{validThru}</p>
					</div>
				</footer>
			</article>
		</button>
	);
}
