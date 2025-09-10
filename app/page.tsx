import AboutSection from '@/components/AboutSection';
import ContactsSection from '@/components/ContactsSection';
import GallerySection from '@/components/GallerySection';
import MainSection from '@/components/MainSection';
import MenuSection from '@/components/MenuSection';
import NewsSection from '@/components/NewsSection';
import PricesSection from '@/components/PriceSection';

export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutSection />
      <PricesSection />
      <MenuSection />
      <NewsSection />
      <GallerySection />
      <ContactsSection />
    </div>
  );
}
