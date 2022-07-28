import React from 'react'

export default function signup() {
    return (
        <div class="container">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Firstname</label>
                    <input type="text" class="form-control" id="inputfirstname" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Lastname</label>
                    <input type="text" class="form-control" id="inputlastname" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Contact number</label>
                    <input type="text" class="form-control" id="inputContactnumber" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Profession</label>
                    <input type="text" class="form-control" id="inputProfession" />
                </div>
                <div class="col-12">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-12">
                    <label for="inputCountry" class="form-label">Country</label>
                    <input type="text" class="form-control" id="inputCountry" />
                </div>
                <div class="col-md-6">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">join as volunteer</label>
                    </div>
                </div>
                <div class="col-md-6">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">join as registered user</label>
                </div>
                </div>
                <div class="col-12">
                    <label for="inputCountry" class="form-label">Username</label>
                    <input type="text" class="form-control" id="inputCountry" />
                </div>
                <div class="col-12">
                    <label for="inputCountry" class="form-label">Password</label>
                    <input type="text" class="form-control" id="inputCountry" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            I agree the terms and conditions
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </form>

        </div>
    )
}
