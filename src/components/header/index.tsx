import { Container } from "./styles"
import LogoSvg from '../../assets/svgs/logo.svg'
export default function Header() {

  return (<Container>
    <div>
      <img src={LogoSvg} alt="Logo" />
    </div>
    <nav>
      <a href="http://">Inicio</a>
      <a href="http://">Planos</a>
      <a href="http://">Status e solicitações</a>
    </nav>
  </Container>)

}