package models

import "github.com/go-openapi/strfmt"

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

/*DeployKey deploy key

swagger:model deployKey
*/
type DeployKey struct {

	/* created at
	 */
	CreatedAt string `json:"created_at,omitempty"`

	/* id
	 */
	ID string `json:"id,omitempty"`

	/* public key
	 */
	PublicKey string `json:"public_key,omitempty"`
}

// Validate validates this deploy key
func (m *DeployKey) Validate(formats strfmt.Registry) error {
	return nil
}