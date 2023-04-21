import styled from 'styled-components'
import img_404 from '../../images/404.svg'

const ErrorWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height : 80vh;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
  font-family: cursive, sans-serif;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #111;
  text-align: center;
  font-family: cursive, sans-serif;
`

const Illustration = styled.img`
  max-width: 700px;
  width: 90%;
  margin-bottom: 50px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={img_404} />
      <ErrorSubtitle>
        Page not found !
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error