interface Props {
  classStyledBackgroundTitle: string;
  title: string;
  value?: number;
}

export function CardInfo({ classStyledBackgroundTitle, title, value }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className={classStyledBackgroundTitle}>{title}</header>
      <span className="mt-[10px] text-xs font-semibold text-white">
        {value ? value.toFixed(0) : '0'}
      </span>
    </div>
  );
}
