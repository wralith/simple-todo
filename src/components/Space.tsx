interface Props {
  height: 'sm' | 'md' | 'lg'
}

function Space({ height }: Props) {
  let n = 0
  if (height == 'sm') {
    n = 2
  }
  if (height == 'md') {
    n = 4
  }
  if (height == 'lg') {
    n = 8
  }

  return <div className={`py-${n}`} />
}

export default Space
