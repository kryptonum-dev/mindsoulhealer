import { ReactNode } from 'react';
import { SectionHeadingTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/ctaButtonBox/ctaButtonBox.types';
import { ImgDataTypes } from '@/components/ui/image';

export type HeroHeaderVideoTypes = {
  sectionHeading: SectionHeadingTypes;
  paragraph: string;
  image: ImgDataTypes;
  videoId: string;
  authorName: string;
  cta: CtaDataTypes;
  index: number;
};

export type VideoBoxTypes = { image: ImgDataTypes; videoId: string; PlayIcon: ReactNode; index: number };