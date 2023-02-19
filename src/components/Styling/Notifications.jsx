import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BiError } from "react-icons/bi";
import { RiFolderWarningLine } from "react-icons/ri";
import { FaInfo } from "react-icons/fa";
const Notifications = () => {
  return (
    <>
      <div className="container">
      <h2 className="text-default font-xl">Notifications</h2>
        <div className="mb-2"></div>
        <div className="row">
          <div className="col-xs-12 col-md-5 col-lg-12">
            <div className="notice bg-success-light-3 text-white bg-hover-dark-4 p-2">
              <div className="notice-content">
                <FiCheckCircle className="text-white font-lg mr-1"/>
              <div className="notice-body">
                Successfully completed task
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2"></div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-5 col-lg-12">
            <div className="notice bg-error-light-3 text-white bg-hover-dark-4 p-2">
              <div className="notice-content">
                <BiError className="text-white font-lg mr-1"/>
              <div className="notice-body">
                Sorry your task could not be completed
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2"></div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-5 col-lg-12">
            <div className="notice bg-info-light-3 text-white bg-hover-dark-4 p-2">
              <div className="notice-content">
                <RiFolderWarningLine className="text-white font-lg mr-1"/>
              <div className="notice-body">
                Warning, warning message has been generated
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2"></div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-5 col-lg-12">
            <div className="notice bg-secondary-light-3 text-white bg-hover-dark-4 p-2">
              <div className="notice-content">
                <FaInfo className="text-white font-lg mr-1"/>
              <div className="notice-body">
                Information, information message has been generated
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
