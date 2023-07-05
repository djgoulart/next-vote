interface HeadingProps {
  text: string
}
export default function Heading(props: HeadingProps) {
  return <h1 className="text-6xl font-semibold leading-none">{props.text}</h1>
}
