import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  login: {
    flex: 1,
    gap: 16,
  },
  login__input: {
    backgroundColor: '#242525',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#6BBD99',
    borderStyle: 'solid',
  },
  login__title: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    marginBottom: 8,
  },
  login__titleEmphasis: {
    color: '#398278',
  },
})

export default styles
