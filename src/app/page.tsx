import Image from "next/image";
import SectionHero from '@/components/SectionHero';
import SectionBenefit from '@/components/SectionBenefit';
import SectionPromo from '@/components/SectionPromo';
import SectionElementsCategory from '@/components/SectionElementsCategory';
import BestSellerProducts from '@/components/BestSellerProducts';
import SectionBlog from '@/components/SectionBlog';
import SectionBrandLogo from '@/components/SectionBrandLogo';
export default function Home() {
  return (
    <main >
     <SectionHero />
     <SectionBenefit />
     <BestSellerProducts />
    <SectionPromo />
    <SectionElementsCategory />
    <SectionBlog />
    <SectionBrandLogo />
    </main>
  );
}
