import { useTranslation, Trans } from "react-i18next";
import type { FunctionComponent } from "../common/types";
import Banner from '../assets/banner.webp';
import ProductImage from '../assets/intro.webp'
import { motion, type Variants } from 'framer-motion'

export const Home = (): FunctionComponent => {
	const { t } = useTranslation();

	const fadeUp: Variants = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
		},
	};

	const containerStagger: Variants = {
		hidden: {},
		visible: {
			transition: { staggerChildren: 0.12, delayChildren: 0.08 }
		}
	};

	return (
		<div className="w-full overflow-x-hidden">
			<div className="relative">
				<motion.img
					src={Banner}
					alt="banner"
					className='w-full mt-24'
					initial={{ opacity: 0, scale: 1.02 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				/>
				<motion.div
					className="py-12 px-4 flex flex-col gap-4 relative lg:absolute lg:top-1/2 lg:left-1/3 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:max-w-[700px] md:gap-8 lg:gap-14"
					variants={containerStagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<motion.span
						className="font-display-fair text-[35px] font-bold md:text-[50px] lg:text-[80px] leading-normal md:leading-[50px] lg:leading-[92px]"
						variants={fadeUp}
					>
					<Trans
						i18nKey="home.banner-title-1"
						components={{ highlight: <span className="text-yellow-500" /> }}
					/>
					</motion.span>
					<motion.span className="text-sm lg:text-[18px] lg:leading-[30px]" variants={fadeUp}>
						{t('home.banner-description-1')}
					</motion.span>
					<motion.button
						className="w-fit bg-[#fcb51f] py-4 px-8 text-white text-sm rounded-full lg:text-[18px]"
						variants={fadeUp}
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						transition={{ type: 'spring', stiffness: 350, damping: 20 }}
					>
						{t('home.join-whitelist')}
					</motion.button>
				</motion.div>
			</div>
			<div className="max-w-[1380px] mx-auto flex flex-col lg:flex-row gap-8 px-4 py-24 lg:gap-16">
				<motion.img
					src={ProductImage}
					alt='Product'
					className=""
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				/>
				<motion.div
					className="flex flex-col gap-4"
					variants={containerStagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<motion.span className="text-2xl lg:text-4xl font-display-fair font-bold" variants={fadeUp}>
						{t('home.intro-title-1')}
					</motion.span>
					<motion.span className="text-sm lg:text-[16px] text-gray-600" variants={fadeUp}>
						{t('home.intro-description-1')}
					</motion.span>
					<motion.div className="flex flex-row gap-2 items-center" variants={fadeUp}>
						<span className="font-bold">{t('home.price')}:</span>
						<span className="text-2xl text-yellow-500 font-bold">$299.99</span>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className="bg-black text-center flex flex-col items-center justify-center px-4 p-12 gap-4"
				variants={containerStagger}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.span className="text-yellow-500 text-2xl lg:text-[40px] font-display-fair font-bold" variants={fadeUp}>
					{t('home.checkout')}
				</motion.span>
				<motion.button
					className="w-fit bg-[#fcb51f] py-4 px-8 text-white text-sm rounded-full lg:text-[18px]"
					variants={fadeUp}
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}
					transition={{ type: 'spring', stiffness: 350, damping: 20 }}
				>
					{t('home.join-whitelist')}
				</motion.button>
			</motion.div>
		</div>
	);
};
