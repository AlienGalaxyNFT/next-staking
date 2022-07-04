interface Props {
  classStyledBackgroundTitle: string;
  title: string;
}

export function CardInfo({ classStyledBackgroundTitle, title }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className={classStyledBackgroundTitle}>{title}</header>
      <span className="mt-[10px] text-xs font-semibold text-white">123 GALI</span>
    </div>
  );
}
