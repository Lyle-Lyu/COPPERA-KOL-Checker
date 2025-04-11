
import { useState } from 'react';

export default function KOLChecker() {
  const [link, setLink] = useState('');
  const [femalePercent, setFemalePercent] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [location, setLocation] = useState('');
  const [contentScore, setContentScore] = useState('');
  const [cpm, setCpm] = useState('');
  const [sales, setSales] = useState('');
  const [frequency, setFrequency] = useState('');
  const [result, setResult] = useState('');

  const evaluate = () => {
    const femaleOK = parseFloat(femalePercent) >= 45;
    const ageOK = ageGroup === '25–34 as Top 1 or 2';
    const contentOK = parseInt(contentScore) >= 3;
    const cpmVal = parseInt(cpm);
    const salesVal = parseInt(sales);
    const freqVal = parseInt(frequency);

    if (femaleOK && ageOK && contentOK && cpmVal <= 100) {
      if (salesVal >= 20 && freqVal >= 3) {
        setResult('✅ Recommended to cooperate');
      } else if (salesVal >= 10 && freqVal >= 2) {
        setResult('⚠️ Consider as testing candidate');
      } else {
        setResult('❌ Not recommended - low sales');
      }
    } else {
      setResult('❌ Not recommended - core criteria not met');
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h2 style={{ fontWeight: 'bold' }}>COPPERA KOL Evaluation Tool</h2>
      <input placeholder="TikTok Profile Link" value={link} onChange={e => setLink(e.target.value)} />
      <input placeholder="% Female Followers" value={femalePercent} onChange={e => setFemalePercent(e.target.value)} />
      <input placeholder="Top Age Group (e.g. 25–34 as Top 1 or 2)" value={ageGroup} onChange={e => setAgeGroup(e.target.value)} />
      <input placeholder="Follower Location" value={location} onChange={e => setLocation(e.target.value)} />
      <input placeholder="Content Quality Score (1-5)" value={contentScore} onChange={e => setContentScore(e.target.value)} />
      <input placeholder="CPM (Rp)" value={cpm} onChange={e => setCpm(e.target.value)} />
      <input placeholder="Sales in Last 30 Days" value={sales} onChange={e => setSales(e.target.value)} />
      <input placeholder="Number of Videos with Sales" value={frequency} onChange={e => setFrequency(e.target.value)} />
      <button onClick={evaluate}>Evaluate</button>
      {result && <p style={{ marginTop: 20, fontWeight: 'bold' }}>{result}</p>}
    </div>
  );
}
