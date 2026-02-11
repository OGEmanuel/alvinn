import { cn } from '@/lib/utils';
import AuthLayout, { AuthDescription, AuthHeader, AuthTitle } from '../layout';
import { Link } from '@tanstack/react-router';

const DescribeYourself = () => {
  return (
    <AuthLayout className="max-w-120">
      <AuthHeader className="w-full">
        <AuthTitle>What best describes you?</AuthTitle>
        <AuthDescription>
          Pick the option that feels most like you.
        </AuthDescription>
      </AuthHeader>
      <div className="grid grid-cols-2 gap-4">
        <DescriptionCard
          imgSrc1="/img/kai.png"
          imgSrc2="/img/ariana.png"
          imgSrc3="/img/beast.png"
          title="Creator"
          description="Individuals sharing their voice, craft, or influence"
        />
        <DescriptionCard
          imgSrc1="/img/brand-1.png"
          imgSrc2="/img/brand-2.png"
          imgSrc3="/img/duo.png"
          title="Brand"
          description="Businesses or teams building something"
        />
        <DescriptionCard
          imgSrc1="/img/explorer-1.png"
          imgSrc2="/img/explorer-2.png"
          imgSrc3="/img/explorer-3.png"
          title="Explorer"
          description="Curious minds discovering, connecting, and engaging"
        />
      </div>
    </AuthLayout>
  );
};

export default DescribeYourself;

const DescriptionCard = (props: {
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;
  title: string;
  description: string;
}) => {
  const { imgSrc1, imgSrc2, imgSrc3, title, description } = props;
  return (
    <div className="relative flex flex-col gap-3 rounded-2xl border-[0.7px] border-white/10 px-4 py-3">
      <div className="flex">
        <ImageCard src={imgSrc1} alt={title} className="-rotate-10" />
        <ImageCard src={imgSrc2} alt={title} className="z-10 -mx-[16.5px]" />
        <ImageCard src={imgSrc3} alt={title} className="z-20 rotate-10" />
      </div>
      <div className="text-sm/custom -tracking-custom-sm flex flex-col gap-1">
        <p className="font-medium text-white">
          <Link to="/auth/connect-accounts">
            <span className="absolute inset-0" />
            {title}
          </Link>
        </p>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const ImageCard = (props: { src: string; alt: string; className?: string }) => {
  const { src, alt, className } = props;

  return (
    <div
      className={cn(
        'h-10 w-7 overflow-hidden rounded border-4 border-[#1C1C1C] bg-black/0',
        className,
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-[2px]">
        <img src={src} alt={alt} className="size-full object-cover" />
      </div>
    </div>
  );
};
