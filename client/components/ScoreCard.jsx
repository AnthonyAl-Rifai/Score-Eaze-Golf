import React, { Fragment } from 'react';

const ScoreCard = ({
  pars,
  scores,
  scorecard,
  onParChange,
  onScoreChange,
  editable = true,
}) => {
  return (
    <div className="score">
      <form>
        <table>
          <tbody>
            <tr>
              {pars.map((el, idx) => {
                if (idx === 0) {
                  return (
                    <Fragment key={idx}>
                      <th>Hole</th>
                      <th>{idx + 1}</th>
                    </Fragment>
                  );
                } else if (idx === 9) {
                  return (
                    <Fragment key={idx}>
                      <th>OUT</th>
                      <th>{idx + 1}</th>
                    </Fragment>
                  );
                } else if (idx === pars.length - 1) {
                  return (
                    <Fragment key={idx}>
                      <th>{idx + 1}</th>
                      <th>IN</th>
                      <th>TOTAL</th>
                    </Fragment>
                  );
                } else {
                  return <th key={idx}>{idx + 1}</th>;
                }
              })}
            </tr>
            <tr>
              {pars.map((el, idx) => {
                if (idx === 0) {
                  return (
                    <Fragment key={idx}>
                      <th>Par</th>
                      <td key={idx}>
                        {editable ? (
                          <select
                            name={`par${idx + 1}`}
                            onChange={(e) => onParChange(e, idx)}
                          >
                            <option value={0} defaultValue>
                              -
                            </option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        ) : (
                          pars[idx]
                        )}
                      </td>
                    </Fragment>
                  );
                }
                if (idx === 9) {
                  const outValue = pars
                    .slice(0, pars.length / 2)
                    .reduce((prev, curr) => prev + curr);
                  return (
                    <Fragment key={idx}>
                      <td>{outValue}</td>
                      <td key={idx}>
                        {editable ? (
                          <select
                            name={`par${idx + 1}`}
                            onChange={(e) => onParChange(e, idx)}
                          >
                            <option value={0} defaultValue>
                              -
                            </option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        ) : (
                          pars[idx]
                        )}
                      </td>
                    </Fragment>
                  );
                }
                if (idx === pars.length - 1) {
                  const inValue = pars
                    .slice(pars.length / 2)
                    .reduce((prev, curr) => prev + curr);
                  const totalValue = pars.reduce((prev, curr) => prev + curr);
                  return (
                    <Fragment key={idx}>
                      <td key={idx}>
                        {editable ? (
                          <select
                            name={`par${idx + 1}`}
                            onChange={(e) => onParChange(e, idx)}
                          >
                            <option value={0} defaultValue>
                              -
                            </option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        ) : (
                          pars[idx]
                        )}
                      </td>
                      <td>{inValue}</td>
                      <td>{totalValue}</td>
                    </Fragment>
                  );
                }
                return (
                  <td key={idx}>
                    {editable ? (
                      <select
                        name={`par${idx + 1}`}
                        onChange={(e) => onParChange(e, idx)}
                      >
                        <option value={0} defaultValue>
                          -
                        </option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    ) : (
                      pars[idx]
                    )}
                  </td>
                );
              })}
            </tr>
            <tr>
              {scores.map((el, idx) => {
                if (idx === 0) {
                  return (
                    <Fragment key={idx}>
                      <th>{scorecard.player}</th>
                      <td key={idx}>
                        {editable ? (
                          <select
                            name={`score${idx + 1}`}
                            onChange={(e) => onScoreChange(e, idx)}
                          >
                            <option value={0} defaultValue>
                              -
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                          </select>
                        ) : (
                          scores[idx]
                        )}
                      </td>
                    </Fragment>
                  );
                }
                if (idx === 9) {
                  const outValue = scores // possibly change name of outValue
                    .slice(0, scores.length / 2)
                    .reduce((prev, curr) => prev + curr);
                  return (
                    <Fragment key={idx}>
                      <td>{outValue}</td>
                      <td key={idx}>
                        {editable ? (
                          <select
                            name={`score${idx + 1}`}
                            onChange={(e) => onScoreChange(e, idx)}
                          >
                            <option value={0} defaultValue>
                              -
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                          </select>
                        ) : (
                          scores[idx]
                        )}
                      </td>
                    </Fragment>
                  );
                }
                if (idx === scores.length - 1) {
                  const inValue = scores
                    .slice(scores.length / 2)
                    .reduce((prev, curr) => prev + curr);
                  const totalValue = scores.reduce((prev, curr) => prev + curr);
                  return (
                    <Fragment key={idx}>
                      <td key={idx}>
                        {editable ? (
                          <select
                            name={`score${idx + 1}`}
                            onChange={(e) => onScoreChange(e, idx)}
                          >
                            <option value={0} defaultValue>
                              -
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                          </select>
                        ) : (
                          scores[idx]
                        )}
                      </td>
                      <td>{inValue}</td>
                      <td>{totalValue}</td>
                    </Fragment>
                  );
                }
                return (
                  <td key={idx}>
                    {editable ? (
                      <select
                        name={`score${idx + 1}`}
                        onChange={(e) => onScoreChange(e, idx)}
                      >
                        <option value={0} defaultValue>
                          -
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                      </select>
                    ) : (
                      scores[idx]
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ScoreCard;
