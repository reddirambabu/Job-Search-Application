import './index.css'

const FilterGroup = props => {
  const renderEmploymentItems = () => {
    const {
      employmentTypesList,
      activeEmploymentType,

      changeEmploymentType,
    } = props

    return employmentTypesList.map(eachItem => {
      const {label, employmentTypeId} = eachItem

      return (
        <li key={employmentTypeId} className="normal-class">
          <input
            type="checkbox"
            id={label}
            checked={activeEmploymentType.includes(employmentTypeId)}
            value={employmentTypeId}
            onChange={changeEmploymentType}
          />
          <label htmlFor={label}>{label}</label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <>
      <h1 className="filter-list-heading">Type of Employment</h1>
      <ul className="filter-container">{renderEmploymentItems()}</ul>
    </>
  )

  const renderSalaryRangeItems = () => {
    const {salaryRangesList, activeSalaryRange, changeSalaryRange} = props

    return salaryRangesList.map(eachRange => {
      const {salaryRangeId, label} = eachRange
      const isActive = salaryRangeId === activeSalaryRange
      const activeSalaryRangeClassName = isActive
        ? 'active-employment-type'
        : 'normal-class'

      const onChangeSalaryId = () => {
        changeSalaryRange(salaryRangeId)
      }

      return (
        <li key={salaryRangeId} className={activeSalaryRangeClassName}>
          <input
            type="radio"
            id={label}
            onClick={onChangeSalaryId}
            value={salaryRangeId}
          />
          <label htmlFor={label}>{label}</label>
        </li>
      )
    })
  }

  const renderSalaryRanges = () => (
    <>
      <h1 className="filter-list-heading">Salary Range</h1>
      <ul className="filter-container">{renderSalaryRangeItems()}</ul>
    </>
  )

  return (
    <>
      {renderEmploymentType()}
      <hr />
      {renderSalaryRanges()}
    </>
  )
}

export default FilterGroup
