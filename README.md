
<h1>React-DropDown</h1>

Description A dropdown React component with text input that returns the selected options from user’s list of options (JSON format). React-Dropdown behaves similarly to a standard select element but comes with some additional features:

- List of selected options is styled and customized;
- Autosize text input for filtering the drop down option list;
- Dropdown returns the list of selected options as an array. The array values are further passed to a return function and used accordingly.

Live Example: http://htmlpreview.github.io/?https://github.com/valvic66/drop-down/blob/master/example/index.html

Usage

    const options = [
          { key: 'RO', label: 'Romania'},
          { key: 'FI', label: 'Finland'},
          { key: 'UK', label: 'United Kingdom'}
        ];
    
    <DropDown
      id='drop_down'
      options={ options }
      selected={['RO', 'PT']}
      onSelect={ (selected) => { this.handleSelected(selected) } }
    />

API

    <DropDown>
      - id - HTML ID
      - options - see above JSON list of options as example
      - selected - an array containing the keys of the default selected options (see above example)
      - onSelect(key) — a function that will be called when an option is selected and will return the selected list of options


License: Micu Valentin - 2017
