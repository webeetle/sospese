export const getPointIcon = (type) => {
  let src = ''
  switch (type) {
    case 'cesto':
      src = '/icons/cesto_point.svg'
      break
    case 'libro':
      src = '/icons/libreria_point.svg'
      break
    case 'caffe':
      src = '/icons/bar_point.svg'
      break
    case 'carrello':
      src = '/icons/carrello_point.svg'
      break
    case 'centro_raccolta':
      src = '/icons/centro_raccolta_point.svg'
      break
    case 'farmaco':
      src = '/icons/farmaco_point.svg'
      break
    default:
      src = '/icons/cesto_point.svg'
      break
  }
  return src
}

export const getTypePointSelect = () => {
  return [
    { label: 'Cesto', value: 'cesto' },
    { label: 'Carrello', value: 'carrello' },
    { label: 'Libro', value: 'libro' },
    { label: 'Caffè', value: 'caffe' },
    { label: 'Farmaco', value: 'farmaco' },
    { label: 'Punto di raccolta', value: 'centro_raccolta' }
  ]
}
