from flask_restful import abort 

def abort_if_doesnt_exist(element_id, elements):
    if element_id not in elements:
        abort(404, message="{} doesn't exist".format(element_id))
