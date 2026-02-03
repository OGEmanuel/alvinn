import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EarlyTesters = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-140 w-full flex flex-col items-center gap-8 max-sm:px-5">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-68.75 h-50 flex justify-center relative items-center">
            <div className="size-[93.75px] rounded-full overflow-hidden bg-white/5 shadow-[0px_0.78px_0.78px_0px_#00000033,0px_-0.78px_0.78px_0px_#FFFFFF66,0px_6.25px_12.5px_0px_#0000000D]">
              <img
                src="/img/logo.png"
                alt="Alvinn"
                className="size-full object-cover"
              />
            </div>
            <ImageWrapper className="size-18.75 bottom-[9.37px] -rotate-5 right-9.5 absolute">
              <img
                src="/img/sticker-1.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
            <ImageWrapper className="size-[62.5px] rounded-[15.63px] absolute -rotate-10 top-6 left-18.75">
              <img
                src="/img/sticker-2.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
            <ImageWrapper className="size-[37.5px] absolute top-10 rounded-[9.38px] rotate-10 right-18.75">
              <img
                src="/img/sticker-4.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
            <ImageWrapper className="size-12.5 absolute rounded-[12.5px] bottom-[22.92px] rotate-5 left-13.25">
              <img
                src="/img/sticker-2.jpg"
                alt="sticker"
                className="size-full object-cover"
              />
            </ImageWrapper>
          </div>
          <p className="sm:text-4xl/11 text-2xl/8 -tracking-[0.03em] font-semibold text-center text-white/60">
            Everyone <span className="text-white">creates</span> and <br />{' '}
            every creator is a <span className="text-white">brand.</span>
          </p>
        </div>
        <Button
          variant={'link'}
          className="bg-white p-0 h-auto hover:no-underline rounded-[53px]"
        >
          <a
            href="https://tally.so/r/2EP7Gb"
            target="_blank"
            rel="noreferrer"
            className="text-black/80 font-medium text-sm/[22px] -tracking-[0.01em] py-3 px-5"
          >
            Become an early tester
          </a>
        </Button>
      </div>
    </div>
  )
}

export default EarlyTesters

const ImageWrapper = (props: {
  children: React.ReactNode
  className?: string
}) => {
  const { children, className } = props

  return (
    <div
      className={cn(
        'border-[6.25px] border-[#9F9F9F]/15 rounded-[18.75px] overflow-hidden shadow-[0px_1.56px_3.13px_0px_#00000005,0px_0.39px_0px_0px_#0000000D,0px_-0.39px_0.39px_0px_#FFFFFF40,0px_-0.39px_1.56px_0px_#00000005]',
        className,
      )}
    >
      {children}
    </div>
  )
}
