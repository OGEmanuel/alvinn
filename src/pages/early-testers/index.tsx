import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const EarlyTesters = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-140 flex-col items-center gap-8 max-sm:px-5">
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex h-50 w-68.75 items-center justify-center">
            <div className="size-[93.75px] overflow-hidden rounded-full bg-white/5 shadow-[0px_0.78px_0.78px_0px_#00000033,0px_-0.78px_0.78px_0px_#FFFFFF66,0px_6.25px_12.5px_0px_#0000000D]">
              <img
                src="/img/logo.png"
                alt="Alvinn"
                className="size-full object-cover"
              />
            </div>
            <ImageWrapper className="absolute right-9.5 bottom-[9.37px] size-18.75 -rotate-5">
              <img
                src="/img/sticker-1.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
            <ImageWrapper className="absolute top-6 left-18.75 size-[62.5px] -rotate-10 rounded-[15.63px]">
              <img
                src="/img/sticker-2.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
            <ImageWrapper className="absolute top-10 right-18.75 size-[37.5px] rotate-10 rounded-[9.38px]">
              <img
                src="/img/sticker-4.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
            <ImageWrapper className="absolute bottom-[22.92px] left-13.25 size-12.5 rotate-5 rounded-[12.5px]">
              <img
                src="/img/sticker-2.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
          </div>
          <p className="text-center text-2xl/8 font-semibold -tracking-[0.03em] text-white/60 sm:text-4xl/11">
            Everyone <span className="text-white">creates</span> and <br />{' '}
            every creator is a <span className="text-white">brand.</span>
          </p>
        </div>
        <Button
          variant={'link'}
          className="h-auto rounded-[53px] bg-white p-0 hover:no-underline"
        >
          <a
            href="https://tally.so/r/2EP7Gb"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 text-sm/[22px] font-medium -tracking-[0.01em] text-black/80"
          >
            Become an early tester
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EarlyTesters;

const ImageWrapper = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-[18.75px] border-[6.25px] border-[#9F9F9F]/15 shadow-[0px_1.56px_3.13px_0px_#00000005,0px_0.39px_0px_0px_#0000000D,0px_-0.39px_0.39px_0px_#FFFFFF40,0px_-0.39px_1.56px_0px_#00000005]',
        className,
      )}
    >
      {children}
    </div>
  );
};
