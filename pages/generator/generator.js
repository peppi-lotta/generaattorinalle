import Nalle from '../../components/nalle';
import Layout from '../../components/layout';
import styles from '../../components/layout.module.scss';
import { useState } from 'react';
import axios from 'axios'


//if we get more nalle-parts just change the maximum value here
var maximum = 9;
var minimum = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function Generator() {
  const [kuono, setKuono] = useState(getRandomInt(minimum, maximum));
  const [masu, setMasu] = useState(getRandomInt(minimum, maximum));
  const [korvat, setKorvat] = useState(getRandomInt(minimum, maximum));
  const [kadet, setKadet] = useState(getRandomInt(minimum, maximum));
  const [naama, setNaama] = useState(getRandomInt(minimum, maximum));
  const [nena, setNena] = useState(getRandomInt(minimum, maximum));
  const [silmat, setSilmat] = useState(getRandomInt(minimum, maximum));
  const [name, setName] = useState('');
  const [formMessage, setMessage] = useState('');
  const [formError, setError] = useState('');

  function handleClick(type, state) {
    let k;
    if (state == maximum - 1) {
      k = 1;
    } else {
      k = state + 1
    }
    switch (type) {
      case 'kuono':
        setKuono(k);
        break;
      case 'masu':
        setMasu(k);
        break;
      case 'korvat':
        setKorvat(k);
        break;
      case 'kadet':
        setKadet(k);
        break;
      case 'naama':
        setNaama(k);
        break;
      case 'nena':
        setNena(k);
        break;
      case 'silmat':
        setSilmat(k);
        break;
      default: {
        setKuono(getRandomInt(minimum, maximum));
        setMasu(getRandomInt(minimum, maximum));
        setKorvat(getRandomInt(minimum, maximum));
        setKadet(getRandomInt(minimum, maximum));
        setNaama(getRandomInt(minimum, maximum));
        setNena(getRandomInt(minimum, maximum));
        setSilmat(getRandomInt(minimum, maximum));
      }
    }
  }
  const url = 'http://localhost:3001/bears';
  const addBear = event => {
    event.preventDefault();
    if (!name) {
      setError('Mur! Et voi tallentaa nallea ilman nimeä. Jokainen nalle ansaitsee oman nimen!')
      setTimeout(() => {
        setError('')
      }, 5000);
      return;
    }
    console.log(
      'Saving bear', name, kuono, silmat, nena, korvat, naama, kadet, masu);

    const bearObject = {
      name: name,
      kuono: kuono,
      silmat: silmat,
      nena: nena,
      korvat: korvat,
      naama: naama,
      kadet: kadet,
      masu: masu
    };
    try {
      let result = axios.post(
        url,
        bearObject
      );
      setName('');
      setMessage('Nalle tallennettu. Näät kaikki nallesi Nalleria-otsikon alla.')
      setTimeout(() => {
        setMessage('')
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <p>Tällä hetkellä uniikkeja nalleja voi luoda 2097152</p>
      <div className={styles.row}>
        <div className={styles.nalle_control}>
          <Nalle kuono={kuono} masu={masu} korvat={korvat} kadet={kadet} naama={naama} nena={nena} silmat={silmat} />
          <div className={styles.buttons}>
            <button onClick={() => handleClick()}>Random nalle</button>
            <button onClick={() => handleClick('korvat', korvat)}>Vaihda korvat</button>
            <button onClick={() => handleClick('silmat', silmat)}>Vaihda silmät</button>
            <button onClick={() => handleClick('nena', nena)}>Vaihda nenä</button>
            <button onClick={() => handleClick('kuono', kuono)}>Vaihda kuono</button>
            <button onClick={() => handleClick('naama', naama)}>Vaihda naama</button>
            <button onClick={() => handleClick('kadet', kadet)}>Vaihda kädet</button>
            <button onClick={() => handleClick('masu', masu)}>Vaihda masu</button>
          </div>
        </div>
        <form className={styles.form} onSubmit={addBear}>
          <div className={styles.content}>
            <div className={styles.success}>{formMessage}</div>
            <div className={styles.error}>{formError}</div>
              <p>Anna nallellesi nimi</p>
              <div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit' className={styles.save}>Tallenna nalle</button>
              </div>
          </div>
        </form>
      </div>
    </Layout>
  );

}
